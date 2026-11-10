import type { Config } from "tailwindcss";

// Merge this into the existing tailwind.config.ts (theme.extend).
export default {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        brand: "var(--brand)",
        navy: { DEFAULT: "#0E1E2B", 950: "#08131C", 800: "#12283A", 700: "#1A3447", 600: "#2A4559" },
        green: { 50: "#E9F5EF", 100: "#CFE9DC", 200: "#A8D6BF", 300: "#78BE9A", 400: "#4DA37A", 500: "#2F895F", 600: "#267650", 700: "#1F6845", 800: "#18533A", 900: "#113D2A" },
        aqua: { DEFAULT: "#6AE9E7", 200: "#A6F2F0" },
        status: {
          ok: "var(--status-ok)", "ok-bg": "var(--status-ok-bg)",
          warning: "var(--status-warning)", "warning-bg": "var(--status-warning-bg)",
          critical: "var(--status-critical)", "critical-bg": "var(--status-critical-bg)",
          info: "var(--status-info)", "info-bg": "var(--status-info-bg)",
        },
      },
      borderRadius: { sm: "6px", md: "10px", lg: "16px", xl: "22px" },
      fontFamily: { sans: ["Inter", "Helvetica Neue", "Arial", "system-ui", "sans-serif"] },
      backgroundImage: { "brand-gradient": "linear-gradient(90deg, #2F895F 0%, #6AE9E7 100%)" },
    },
  },
} satisfies Config;
