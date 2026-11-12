// Geometry and timing for <HeroBackground />. Pure data: edit here to reshape the network.
// All times are seconds within one 12s loop. Keep WAVE and the amber timing in step with
// the keyframes in hero-background.css (percentages of the 12s loop are noted there).

export const LOOP_S = 12;
export const VIEWBOX = { w: 720, h: 560 };

export type NodeDef = { id: string; x: number; y: number; r: number; lg?: boolean };

// lg = large screens only (hidden under 768px to keep mobile light).
export const NODES: NodeDef[] = [
  { id: "n1", x: 110, y: 410, r: 3, lg: true },
  { id: "n2", x: 190, y: 180, r: 3.5, lg: true },
  { id: "n3", x: 255, y: 330, r: 4 },
  { id: "n4", x: 350, y: 95, r: 3, lg: true },
  { id: "n5", x: 400, y: 250, r: 5 },
  { id: "n6", x: 390, y: 440, r: 3.5 },
  { id: "n7", x: 520, y: 160, r: 4.5 },
  { id: "n8", x: 560, y: 330, r: 5.5 },
  { id: "n9", x: 500, y: 500, r: 3, lg: true },
  { id: "n10", x: 650, y: 90, r: 3.5 },
  { id: "n11", x: 665, y: 250, r: 3, lg: true },
  { id: "n12", x: 640, y: 440, r: 4 },
];

// The node that briefly turns amber (a detected configuration change).
export const AMBER_NODE = "n10";

// Scanning wave: sweeps left to right between these times (36% to 78% of the loop).
export const WAVE = { start: 4.32, dur: 5.04, width: 140 };

const byId = new Map(NODES.map((n) => [n.id, n]));
const node = (id: string) => {
  const n = byId.get(id);
  if (!n) throw new Error(`Unknown node ${id}`);
  return n;
};

// [from, to, curvature]. A small curvature keeps lines organic without looking drawn.
const EDGE_DEFS: [string, string, number][] = [
  ["n1", "n3", 0.06], ["n2", "n3", -0.08], ["n2", "n4", 0.07], ["n3", "n5", 0.05],
  ["n4", "n5", -0.06], ["n5", "n7", 0.08], ["n5", "n6", -0.05], ["n5", "n8", 0.06],
  ["n6", "n8", 0.07], ["n7", "n10", -0.06], ["n7", "n8", 0.05], ["n8", "n11", -0.07],
  ["n8", "n12", 0.06], ["n6", "n9", 0.06], ["n9", "n12", -0.08], ["n10", "n11", 0.05],
];

function curve(from: string, to: string, k: number, reverse = false): string {
  const a = node(from);
  const b = node(to);
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  const cx = (a.x + b.x) / 2 + (-dy / len) * len * k;
  const cy = (a.y + b.y) / 2 + (dx / len) * len * k;
  const [p, q] = reverse ? [b, a] : [a, b];
  return `M${p.x} ${p.y}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${q.x} ${q.y}`;
}

export type EdgeDef = { key: string; d: string; lg: boolean };
export const EDGES: EdgeDef[] = EDGE_DEFS.map(([a, b, k]) => ({
  key: `${a}-${b}`,
  d: curve(a, b, k),
  lg: !!(node(a).lg || node(b).lg),
}));

export type PulseDef = { key: string; d: string; start: number; lg: boolean };

// Each pulse travels its connection over 4.8s (0% to 40% of the loop) starting at `start`.
// n5 to n7 to n10 is one relayed path: the second leg starts at 10.8s and arrives at 3.6s,
// just as AMBER_NODE changes.
const PULSE_DEFS: { edge: string; start: number; reverse?: boolean; lg?: boolean }[] = [
  { edge: "n3-n5", start: 1.2 },
  { edge: "n5-n7", start: 6.0 },
  { edge: "n7-n10", start: 10.8 },
  { edge: "n8-n12", start: 2.4 },
  { edge: "n7-n8", start: 7.4 },
  { edge: "n2-n3", start: 8.0, lg: true },
  { edge: "n9-n12", start: 4.0, reverse: true, lg: true },
  { edge: "n10-n11", start: 5.0, lg: true },
];

export const PULSES: PulseDef[] = PULSE_DEFS.map((p) => {
  const [a, b, k] = EDGE_DEFS.find(([x, y]) => `${x}-${y}` === p.edge)!;
  return {
    key: p.edge,
    d: curve(a, b, k, p.reverse),
    start: p.start,
    lg: !!(p.lg || node(a).lg || node(b).lg),
  };
});

// Each node pings softly as the wave's centre passes over its x position.
export const PINGS = NODES.map((n) => ({
  id: n.id,
  x: n.x,
  y: n.y,
  r: n.r * 2.6,
  lg: !!n.lg,
  t: +(WAVE.start + ((n.x + WAVE.width / 2) / (VIEWBOX.w + WAVE.width)) * WAVE.dur).toFixed(2),
}));
