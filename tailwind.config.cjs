/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: "class",
 content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
 important: true,
 theme: {
  extend: {
   fontFamily: {
    sans: ["Plus Jakarta Sans", "sans-serif"],
    serif: ["Lora"],
    display: ["Plus Jakarta Display", "sans-serif"],
    mono: ["JetBrains Mono", "monospace"],
   },
   animation: {
    gradient: "gradient 5s ease infinite",
   },
   keyframes: {
    gradient: {
     "0%": { "background-position": "0% 50%" },
     "50%": { "background-position": "100% 50%" },
     "100%": { "background-position": "0% 50%" },
    },
   },
   colors: {
    //  Light Mode
    "background-light": "rgb(var(--color-background-light) / <alpha-value>)",
    "on-background-light":
     "rgb(var(--color-on-background-light) / <alpha-value>)",
    "surface-bg-light": "rgb(var(--color-surface-bg-light) / <alpha-value>)",
    "surface-dim-light": "rgb(var(--color-surface-dim-light) / <alpha-value>)",
    "surface-bright-light":
     "rgb(var(--color-surface-bright-light) / <alpha-value>)",
    "surface-lowest-light":
     "rgb(var(--color-surface-lowest-light) / <alpha-value>)",
    "surface-low-light": "rgb(var(--color-surface-low-light) / <alpha-value>)",
    "surface-light": "rgb(var(--color-surface-light) / <alpha-value>)",
    "surface-high-light":
     "rgb(var(--color-surface-high-light) / <alpha-value>)",
    "surface-highest-light":
     "rgb(var(--color-surface-highest-light) / <alpha-value>)",
    "on-surface-light": "rgb(var(--color-on-surface-light) / <alpha-value>)",
    "surface-variant-light":
     "rgb(var(--color-surface-variant-light) / <alpha-value>)",
    "on-surface-variant-light":
     "rgb(var(--color-on-surface-variant-light) / <alpha-value>)",
    "inverse-surface-variant-light":
     "rgb(var(--color-inverse-surface-variant-light) / <alpha-value>)",
    "inverse-surface-light":
     "rgb(var(--color-inverse-surface-light) / <alpha-value>)",
    "inverse-on-surface-light":
     "rgb(var(--color-inverse-on-surface-light) / <alpha-value>)",
    "outline-light": "rgb(var(--color-outline-light) / <alpha-value>)",
    "outline-variant-light":
     "rgb(var(--color-outline-variant-light) / <alpha-value>)",
    "shadow-light": "rgb(var(--color-shadow-light) / <alpha-value>)",
    "scrim-light": "rgb(var(--color-scrim-light) / <alpha-value>)",
    "surface-tint-light":
     "rgb(var(--color-surface-tint-light) / <alpha-value>)",
    "primary-light": "rgb(var(--color-primary-light) / <alpha-value>)",
    "on-primary-light": "rgb(var(--color-on-primary-light) / <alpha-value>)",
    "primary-container-light":
     "rgb(var(--color-primary-container-light) / <alpha-value>)",
    "on-primary-container-light":
     "rgb(var(--color-on-primary-container-light) / <alpha-value>)",
    "inverse-primary-light":
     "rgb(var(--color-inverse-primary-light) / <alpha-value>)",
    "secondary-light": "rgb(var(--color-secondary-light) / <alpha-value>)",
    "on-secondary-light":
     "rgb(var(--color-on-secondary-light) / <alpha-value>)",
    "secondary-container-light":
     "rgb(var(--color-secondary-container-light) / <alpha-value>)",
    "on-secondary-container-light":
     "rgb(var(--color-on-secondary-container-light) / <alpha-value>)",
    "tertiary-light": "rgb(var(--color-tertiary-light) / <alpha-value>)",
    "on-tertiary-light": "rgb(var(--color-on-tertiary-light) / <alpha-value>)",
    "tertiary-container-light":
     "rgb(var(--color-tertiary-container-light) / <alpha-value>)",
    "on-tertiary-container-light":
     "rgb(var(--color-on-tertiary-container-light) / <alpha-value>)",
    "error-light": "rgb(var(--color-error-light) / <alpha-value>)",
    "on-error-light": "rgb(var(--color-on-error-light) / <alpha-value>)",
    "error-container-light":
     "rgb(var(--color-error-container-light) / <alpha-value>)",
    "error-on-container-light":
     "rgb(var(--color-error-on-container-light) / <alpha-value>)",

    // Dark Mode
    "background-dark": "rgb(var(--color-background-dark) / <alpha-value>)",
    "on-background-dark":
     "rgb(var(--color-on-background-dark) / <alpha-value>)",
    "surface-bg-dark": "rgb(var(--color-surface-bg-dark) / <alpha-value>)",
    "surface-dim-dark": "rgb(var(--color-surface-dim-dark) / <alpha-value>)",
    "surface-bright-dark":
     "rgb(var(--color-surface-bright-dark) / <alpha-value>)",
    "surface-lowest-dark":
     "rgb(var(--color-surface-lowest-dark) / <alpha-value>)",
    "surface-low-dark": "rgb(var(--color-surface-low-dark) / <alpha-value>)",
    "surface-dark": "rgb(var(--color-surface-dark) / <alpha-value>)",
    "surface-high-dark": "rgb(var(--color-surface-high-dark) / <alpha-value>)",
    "surface-highest-dark":
     "rgb(var(--color-surface-highest-dark) / <alpha-value>)",
    "on-surface-dark": "rgb(var(--color-on-surface-dark) / <alpha-value>)",
    "surface-variant-dark":
     "rgb(var(--color-surface-variant-dark) / <alpha-value>)",
    "on-surface-variant-dark":
     "rgb(var(--color-on-surface-variant-dark) / <alpha-value>)",
    "inverse-surface-variant-dark":
     "rgb(var(--color-inverse-surface-variant-dark) / <alpha-value>)",
    "inverse-surface-dark":
     "rgb(var(--color-inverse-surface-dark) / <alpha-value>)",
    "inverse-on-surface-dark":
     "rgb(var(--color-inverse-on-surface-dark) / <alpha-value>)",
    "outline-dark": "rgb(var(--color-outline-dark) / <alpha-value>)",
    "outline-variant-dark":
     "rgb(var(--color-outline-variant-dark) / <alpha-value>)",
    "shadow-dark": "rgb(var(--color-shadow-dark) / <alpha-value>)",
    "scrim-dark": "rgb(var(--color-scrim-dark) / <alpha-value>)",
    "surface-tint-dark": "rgb(var(--color-surface-tint-dark) / <alpha-value>)",
    "primary-dark": "rgb(var(--color-primary-dark) / <alpha-value>)",
    "on-primary-dark": "rgb(var(--color-on-primary-dark) / <alpha-value>)",
    "primary-container-dark":
     "rgb(var(--color-primary-container-dark) / <alpha-value>)",
    "on-primary-container-dark":
     "rgb(var(--color-on-primary-container-dark) / <alpha-value>)",
    "inverse-primary-dark":
     "rgb(var(--color-inverse-primary-dark) / <alpha-value>)",
    "secondary-dark": "rgb(var(--color-secondary-dark) / <alpha-value>)",
    "on-secondary-dark": "rgb(var(--color-on-secondary-dark) / <alpha-value>)",
    "secondary-container-dark":
     "rgb(var(--color-secondary-container-dark) / <alpha-value>)",
    "on-secondary-container-dark":
     "rgb(var(--color-on-secondary-container-dark) / <alpha-value>)",
    "tertiary-dark": "rgb(var(--color-tertiary-dark) / <alpha-value>)",
    "on-tertiary-dark": "rgb(var(--color-on-tertiary-dark) / <alpha-value>)",
    "tertiary-container-dark":
     "rgb(var(--color-tertiary-container-dark) / <alpha-value>)",
    "on-tertiary-container-dark":
     "rgb(var(--color-on-tertiary-container-dark) / <alpha-value>)",
    "error-dark": "rgb(var(--color-error-dark) / <alpha-value>)",
    "on-error-dark": "rgb(var(--color-on-error-dark) / <alpha-value>)",
    "error-container-dark":
     "rgb(var(--color-error-container-dark) / <alpha-value>)",
    "error-on-container-dark":
     "rgb(var(--color-error-on-container-dark) / <alpha-value>)",
   },
   backgroundImage: {
    "full-header-light": `var(--background-image-light)`,
    "full-header-dark": `var(--background-image-dark)`,
   },
  },
 },
 plugins: [],
};
