import { useId, type CSSProperties } from "react";
import "./hero-background.css";
import { AMBER_NODE, EDGES, NODES, PINGS, PULSES, VIEWBOX, WAVE } from "./network";

type Props = { className?: string };

const at = (t: number) => ({ "--t": `${t}s` }) as CSSProperties;

/**
 * Decorative network animation for the Basera hero. Pure SVG + CSS: no state, no timers.
 * Place it as the first child of the hero (which needs `position: relative`) and lift the
 * hero content above it with `relative z-10`. It sits behind the content, ignores the
 * pointer, never leaves the hero, and fades out toward the left so the copy stays quiet.
 */
export function HeroBackground({ className }: Props) {
  const gradId = `hb-wave-${useId().replace(/:/g, "")}`;
  const amber = NODES.find((n) => n.id === AMBER_NODE)!;

  return (
    <div className={["hero-bg", className].filter(Boolean).join(" ")} aria-hidden="true">
      <div className="hero-bg__glow" />
      <svg
        className="hero-bg__svg"
        viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
        preserveAspectRatio="xMaxYMid slice"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" className="hero-bg__wave-stop hero-bg__wave-stop--edge" />
            <stop offset="0.5" className="hero-bg__wave-stop" />
            <stop offset="1" className="hero-bg__wave-stop hero-bg__wave-stop--edge" />
          </linearGradient>
        </defs>

        <g>
          {EDGES.map((e) => (
            <path key={e.key} d={e.d} className={`hero-bg__edge${e.lg ? " hero-bg__lg" : ""}`} />
          ))}
        </g>

        <rect
          className="hero-bg__wave"
          x={-WAVE.width}
          y={0}
          width={WAVE.width}
          height={VIEWBOX.h}
          fill={`url(#${gradId})`}
        />

        <g>
          {PULSES.map((p) => (
            <path
              key={p.key + p.start}
              d={p.d}
              pathLength={100}
              className={`hero-bg__pulse${p.lg ? " hero-bg__lg" : ""}`}
              style={at(p.start)}
            />
          ))}
        </g>

        <g>
          {NODES.map((n) => (
            <g key={n.id} className={n.lg ? "hero-bg__lg" : undefined}>
              <circle className="hero-bg__ring" cx={n.x} cy={n.y} r={n.r * 2.2} />
              <circle className="hero-bg__dot" cx={n.x} cy={n.y} r={n.r} />
            </g>
          ))}
        </g>

        <g className="hero-bg__scan">
          {PINGS.map((p) => (
            <circle
              key={p.id}
              className={`hero-bg__ping${p.lg ? " hero-bg__lg" : ""}`}
              cx={p.x}
              cy={p.y}
              r={p.r}
              style={at(p.t)}
            />
          ))}
        </g>

        <g className="hero-bg__amber">
          <circle className="hero-bg__amber-halo" cx={amber.x} cy={amber.y} r={amber.r * 3.2} />
          <circle className="hero-bg__amber-ring" cx={amber.x} cy={amber.y} r={amber.r * 2.2} />
          <circle className="hero-bg__amber-dot" cx={amber.x} cy={amber.y} r={amber.r} />
        </g>
        <circle className="hero-bg__alert" cx={amber.x} cy={amber.y} r={amber.r * 2.2} />
      </svg>
    </div>
  );
}

export default HeroBackground;
