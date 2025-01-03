import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          60: "#a48eff",
          80: "#8668ff",
          100: "#6842ff",
        },
        black: {
          60: "#28293d",
        },
      },
    },
  },
  plugins: [],
  important: true,
} satisfies Config;
