import type { Config } from "tailwindcss";

/**
 * Brand palette sumber: "Design Guide Landing Page Return Bottle Program
 * for Djamojo by Djamoe Spirit" (8 warna resmi).
 * - #fede1a kuning kunyit terang
 * - #fdf5a2 kuning muda / cream
 * - #626f27 hijau olive
 * - #858585 abu netral
 * - #b3a495 coklat muda (tan)
 * - #746555 coklat sedang
 * - #ad7841 coklat oranye (kayu)
 * - #542f18 coklat tua (bumi/kopi)
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Hijau olive (primary hijau) — #626f27 family
        djamojo: {
          green: {
            50: "#f3f6ec",
            100: "#e8eed8",
            200: "#d2dba9",
            300: "#b8c585",
            400: "#8a9a4a",
            500: "#626f27",
            600: "#4f5a1f",
            700: "#3a4320"
          },
          // Kunyit (yellow/cream) — #fede1a family
          turmeric: {
            50: "#fdfbe8",
            100: "#fdf5a2",
            200: "#fbec6a",
            300: "#f5e027",
            400: "#f5df2c",
            500: "#fede1a",
            600: "#d4c000",
            700: "#a89500"
          },
          // Coklat / earth — keluarga #542f18..#b3a495
          earth: {
            50: "#f8f3ec",
            100: "#ede0d0",
            200: "#d6c3a9",
            300: "#b3a495",
            400: "#ad7841",
            500: "#746555",
            600: "#542f18",
            700: "#3d2110"
          },
          // Netral — #858585
          gray: {
            500: "#858585"
          }
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      maxWidth: {
        "container": "1200px"
      }
    }
  },
  plugins: []
};

export default config;
