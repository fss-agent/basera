# HeroBackground

Decorative network animation for the Basera hero: a soft mint glow, a few firewall-environment nodes joined by thin lines, slow green pulses, one node that briefly turns amber, and a faint scanning wave. SVG and CSS only; no dependencies, no state, no timers. One 12s seamless loop.

## Use

```tsx
import { HeroBackground } from "@/components/HeroBackground/HeroBackground";

<section className="relative overflow-hidden bg-background">
  <HeroBackground />
  <div className="relative z-10 ...">{/* existing headline, copy, buttons, dashboard image */}</div>
</section>
```

- The hero needs `position: relative`. Give its existing content `relative z-10` so it sits above the background.
- The layer is transparent, so it blends with whatever hero background is already there.
- Everything is `aria-hidden`, `pointer-events: none` and clipped to the hero (`overflow: hidden`, `contain: paint`).

## Behaviour

- Left quarter of the hero stays clear (CSS mask); the network is full strength from the middle.
- Under 768px: fewer nodes and lines, no scanning wave, softer glow.
- `prefers-reduced-motion`: nothing moves; glow, lines and nodes stay as a still background.
- Colours come from `src/index.css` tokens (`--brand`, `--aqua`, `--basera-green`, `--status-warning`), so the dark theme works without changes.

## Tuning

Edit `network.ts`: node positions, which connections carry pulses (`PULSES`, start times in seconds), which node turns amber (`AMBER_NODE`). If you move the amber timing or the wave, keep the percentages in `hero-background.css` in step (noted at the top of that file).
