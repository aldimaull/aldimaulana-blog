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
    primary: {
     10: "#261900",
     20: "#402d00",
     25: "#4e3800",
     30: "#5c4200",
     35: "#6b4e00",
     40: "#7a5900",
     50: "#997000",
     60: "#b8890f",
     70: "#d6a32e",
     80: "#f4be48",
     90: "#ffdea2",
     95: "#ffefd5",
     98: "#fff8f2",
     99: "#fffbff",
     100: "#ffffff",
    },
    secondary: {
     10: "#251a04",
     20: "#3b2f15",
     25: "#473a1f",
     30: "#53452a",
     35: "#5f5034",
     40: "#6c5c3f",
     50: "#867556",
     60: "#a18e6e",
     70: "#bca987",
     80: "#d9c4a0",
     90: "#f6e0bb",
     95: "#ffefd5",
     98: "#fff8f2",
     99: "#fffbff",
     100: "#ffffff",
    },
    tertiary: {
     10: "#092008",
     20: "#1e361b",
     25: "#294125",
     30: "#344d30",
     35: "#3f593a",
     40: "#4b6546",
     50: "#637e5d",
     60: "#7c9875",
     70: "#96b38e",
     80: "#b1cfa8",
     90: "#cdebc3",
     95: "#dbf9d1",
     98: "#ecffe3",
     99: "#f6ffef",
     100: "#ffffff",
    },
    error: {
     10: "#410002",
     20: "#690005",
     25: "#7e0007",
     30: "#93000a",
     35: "#a80710",
     40: "#ba1a1a",
     50: "#de3730",
     60: "#ff5449",
     70: "#ff897d",
     80: "#ffb4ab",
     90: "#ffdad6",
     95: "#ffedea",
     98: "#fff8f7",
     99: "#fffbff",
     100: "#fff",
    },
    neutral: {
     10: "#1e1b16",
     20: "#34302a",
     25: "#3f3b35",
     30: "#4a4640",
     35: "#56524b",
     40: "#635e57",
     50: "#7c766f",
     60: "#969088",
     70: "#b1aaa2",
     80: "#cdc5bd",
     90: "#e9e1d9",
     95: "#f8efe7",
     98: "#fff8f2",
     99: "#fffbff",
     100: "#ffffff",
     variant: {
      10: "#211b10",
      20: "#363024",
      25: "#423a2e",
      30: "#4d4639",
      35: "#595144",
      40: "#665d4f",
      50: "#7f7667",
      60: "#998f80",
      70: "#b5aa99",
      80: "#d1c5b4",
      90: "#ede1cf",
      95: "#fcefdd",
      98: "#fff8f2",
      99: "#fffbff",
      100: "#ffffff",
     },
    },
   },
  },
 },
 plugins: [],
};
