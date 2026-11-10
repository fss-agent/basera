# Basera brand and design rules

Paste this into Lovable's Project Knowledge. Basera by Foreseeson is a unified IT and security operations platform for MSPs, MSSPs and enterprise IT teams. Concept stage: the name is pending trademark clearance. Launch solution: Basera Control (firewall governance, change requests, approvals, audit). Supported environments: Fortinet, AWS, Azure only.

## Build rules
- Use the tokens in `src/index.css` and the Tailwind names in `tailwind.config.ts`. Never hard-code hex values in components.
- Light theme is the default for marketing pages. Dark theme (class `dark`) is the default for the product dashboard.
- Font: Inter (400, 500, 600, 700) for all text. The logo is outlined artwork; never type "basera" in a font.
- Primary buttons: `bg-primary text-primary-foreground`, pill shape (`rounded-full`), 40px minimum height. One primary button per view.
- Cards: `bg-card border rounded-lg p-6` (16px radius). Separate surfaces with a 1px border first, a fill change second. No coloured stripe on a card edge.
- Brand green `#2F895F` is for icons, strokes and text 24px and up only (4.3:1 on white). Use `primary` (#267650) for buttons, links and small green text. Aqua `#6AE9E7` is a highlight on navy only and never text on light grounds.
- Gradient: `bg-brand-gradient`, green to aqua, left to right, one per view, never behind data or text. Use navy text on it.
- Status colours (`status-ok`, `status-warning`, `status-critical`, `status-info`) mean state only. Always add a word or icon.
- Charts: green first, then `status-info`, then `green-300`. Amber and red are for state.
- Icons: outline, 1.5px stroke, round caps (lucide-react). Green on light, aqua on navy.
- Focus: 3px ring, 2px offset (`ring`). Respect `prefers-reduced-motion`.

## Logo
- Files are in `public/brand/logos`. `basera-logo-primary.svg` (green b, navy letters) on light grounds. `basera-logo-reversed.svg` (green b, white letters) on navy. `basera-logo-navy`, `-black` and `-white` are single-ink versions for busy or coloured grounds.
- Clear space: the lowercase letter height on all sides. Minimum width 120px. Mark alone: `public/brand/marks`, minimum 16px. App icons: `public/brand/app-icons`.
- Do not recolour, rotate, skew, add effects, reverse the gradient, or put the gradient b on green, aqua or busy photography.
- Never recreate Foreseeson or partner logos.

## Voice
Calm, direct, specific. Sentence case. Canadian spelling. No exclamation marks, emoji, fear hooks or hype. Describe only validated capabilities. Mark demo data as illustrative and use fictional customers.
