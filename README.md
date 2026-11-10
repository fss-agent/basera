# Basera design system for Lovable

Lovable has no import for design systems, so this folder is laid out to drop into a Lovable (React, Vite, Tailwind, shadcn/ui) project.

1. Add the `public/brand` folder to the project (GitHub sync, or upload the files to `public/`).
2. Replace the contents of `src/index.css` with the one here.
3. Merge `tailwind.config.snippet.ts` into `tailwind.config.ts` under `theme.extend`.
4. Paste `LOVABLE_KNOWLEDGE.md` into Project Settings, Knowledge.
5. Prompt: "Apply the Basera brand from Project Knowledge. Use the logo files in public/brand/logos."

`tokens.json` is the full source token file (light and dark values, usage notes).
