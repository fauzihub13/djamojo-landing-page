// Template helper untuk generate OG image SVG programmatic
// Dipakai untuk memastikan konsistensi visual antar halaman
export const ogColors = {
  green700: "#314b20",
  green500: "#4a7230",
  green400: "#5d8a3f",
  turmeric500: "#c79919",
  turmeric400: "#e3b73b",
  earth500: "#9c6f44",
  earth50: "#faf6f1",
  cream: "#fdf8ec"
} as const;

export interface OgConfig {
  title: string;
  subtitle: string;
  eyebrow: string;
  pill: string;
  pageSlug: string;
}
