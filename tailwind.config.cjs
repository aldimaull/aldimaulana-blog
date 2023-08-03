/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: "class",
 content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
 important: true,
 theme: {
  extend: {
   fontFamily: {
    sans: ["Roboto Flex"],
    serif: ["Lora"],
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
    on: {
     primary: {
      light: "rgb(var(--color-on-primary-light) / <alpha-value>)",
      dark: "rgb(var(--color-on-primary-dark) / <alpha-value>)",
      container: {
       light: "rgb(var(--color-on-primary-container-light) / <alpha-value>)",
       dark: "rgb(var(--color-on-primary-container-dark) / <alpha-value>)",
      },
     },
     secondary: {
      light: "rgb(var(--color-on-secondary-light) / <alpha-value>)",
      dark: "rgb(var(--color-on-secondary-dark) / <alpha-value>)",
      container: {
       light: "rgb(var(--color-on-secondary-container-light) / <alpha-value>)",
       dark: "rgb(var(--color-on-secondary-container-dark) / <alpha-value>)",
      },
     },
     tertiary: {
      light: "rgb(var(--color-on-tertiary-light) / <alpha-value>)",
      dark: "rgb(var(--color-on-tertiary-dark) / <alpha-value>)",
      container: {
       light: "rgb(var(--color-on-tertiary-container-light) / <alpha-value>)",
       dark: "rgb(var(--color-on-tertiary-container-dark) / <alpha-value>)",
      },
     },
     error: {
      light: "rgb(var(--color-on-error-light) / <alpha-value>)",
      dark: "rgb(var(--color-on-error-dark) / <alpha-value>)",
      container: {
       light: "rgb(var(--color-on-error-container-light) / <alpha-value>)",
       dark: "rgb(var(--color-on-error-container-dark) / <alpha-value>)",
      },
     },
     background: {
      light: "rgb(var(--color-on-background-light) / <alpha-value>)",
      dark: "rgb(var(--color-on-background-dark) / <alpha-value>)",
     },
     surface: {
      light: "rgb(var(--color-on-surface-light) / <alpha-value>)",
      dark: "rgb(var(--color-on-surface-dark) / <alpha-value>)",
      variant: {
       light: "rgb(var(--color-on-surface-variant-light) / <alpha-value>)",
       dark: "rgb(var(--color-on-surface-variant-dark) / <alpha-value>)",
      },
     },
    },
    background: {
     light: "rgb(var(--color-background-light) / <alpha-value>)",
     dark: "rgb(var(--color-background-dark) / <alpha-value>)",
    },
    primary: {
     light: "rgb(var(--color-primary-light) / <alpha-value>)",
     dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
     container: {
      light: "rgb(var(--color-primary-container-light) / <alpha-value>)",
      dark: "rgb(var(--color-primary-container-dark) / <alpha-value>)",
     },
    },
    secondary: {
     light: "rgb(var(--color-secondary-light) / <alpha-value>)",
     dark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
     container: {
      light: "rgb(var(--color-secondary-container-light) / <alpha-value>)",
      dark: "rgb(var(--color-secondary-container-dark) / <alpha-value>)",
     },
    },
    tertiary: {
     light: "rgb(var(--color-tertiary-light) / <alpha-value>)",
     dark: "rgb(var(--color-tertiary-dark) / <alpha-value>)",
     container: {
      light: "rgb(var(--color-tertiary-container-light) / <alpha-value>)",
      dark: "rgb(var(--color-tertiary-container-dark) / <alpha-value>)",
     },
    },
    error: {
     light: "rgb(var(--color-error-light) / <alpha-value>)",
     dark: "rgb(var(--color-error-dark) / <alpha-value>)",
     container: {
      light: "rgb(var(--color-error-container-light) / <alpha-value>)",
      dark: "rgb(var(--color-error-container-dark) / <alpha-value>)",
     },
    },
    outline: {
     light: "rgb(var(--color-outline-light) / <alpha-value>)",
     dark: "rgb(var(--color-outline-dark) / <alpha-value>)",
    },
    inverse: {
     on: {
      surface: {
       light: "rgb(var(--color-inverse-on-surface-light) / <alpha-value>)",
       dark: "rgb(var(--color-inverse-on-surface-dark) / <alpha-value>)",
      },
     },
     surface: {
      light: "rgb(var(--color-inverse-surface-light) / <alpha-value>)",
      dark: "rgb(var(--color-inverse-surface-dark) / <alpha-value>)",
      variant: {
       light: "rgb(var(--color-inverse-surface-variant-light) / <alpha-value>)",
       dark: "rgb(var(--color-inverse-surface-variant-dark) / <alpha-value>)",
      },
     },
     primary: {
      light: "rgb(var(--color-inverse-primary-light) / <alpha-value>)",
      dark: "rgb(var(--color-inverse-primary-dark) / <alpha-value>)",
     },
    },
    surface: {
     variant: {
      light: "rgb(var(--color-surface-variant-light) / <alpha-value>)",
      dark: "rgb(var(--color-surface-variant-dark) / <alpha-value>)",
     },
     light: "rgb(var(--color-surface-light) / <alpha-value>)",
     dark: "rgb(var(--color-surface-dark) / <alpha-value>)",
     lowest: {
      light: "rgb(var(--color-surface-lowest-light) / <alpha-value>)",
      dark: "rgb(var(--color-surface-lowest-dark) / <alpha-value>)",
     },
     low: {
      light: "rgb(var(--color-surface-low-light) / <alpha-value>)",
      dark: "rgb(var(--color-surface-low-dark) / <alpha-value>)",
     },
     container: {
      light: "rgb(var(--color-surface-container-light) / <alpha-value>)",
      dark: "rgb(var(--color-surface-container-dark) / <alpha-value>)",
     },
     high: {
      light: "rgb(var(--color-surface-high-light) / <alpha-value>)",
      dark: "rgb(var(--color-surface-high-dark) / <alpha-value>)",
     },
     highest: {
      light: "rgb(var(--color-surface-highest-light) / <alpha-value>)",
      dark: "rgb(var(--color-surface-highest-dark) / <alpha-value>)",
     },
     tint: {
      light: "rgb(var(--color-surface-tint-light) / <alpha-value>)",
      dark: "rgb(var(--color-surface-tint-dark) / <alpha-value>)",
     },
    },
    scrim: {
     light: "rgb(var(--color-scrim-light) / <alpha-value>)",
     dark: "rgb(var(--color-scrim-dark) / <alpha-value>)",
    },
    shadow: {
     light: "rgb(var(--color-shadow-light) / <alpha-value>)",
     dark: "rgb(var(--color-shadow-dark) / <alpha-value>)",
    },
   },
  },
 },
 plugins: [],
};
