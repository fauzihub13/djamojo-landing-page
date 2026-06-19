export interface DropPoint {
  name: string;
  address: string;
  note?: string;
  mapUrl?: string;
}

export const siteConfig = {
  name: "Djamojo by Djamoe Spirit",
  shortName: "Djamojo",
  tagline: "Jamu Autentik, Bumi Lestari",
  description:
    "Djamojo by Djamoe Spirit — pionir jamu tradisional homemade siap minum dalam botol kaca dari Bandung. Program Return Bottle bersertifikat food-grade untuk ekonomi sirkular.",
  url: "https://djamojo.id",
  established: 2012,
  city: "Bandung",
  contact: {
    whatsapp: "+6281234567890",
    email: "halo@djamojo.id",
    instagram: "@djamojo",
    linkedin: "Djamojo by Djamoe Spirit"
  },
  hashtags: [
    "#KembaliBerseri",
    "#TukarBotolTukarKebaikan",
    "#BotolKacaPunyaCerita",
    "#SirkularBersamaDjamojo"
  ],
  // Sumber: Design Guideline Return Bottle Djamojo
  brandColors: {
    yellow: "#fede1a",
    cream: "#fdf5a2",
    olive: "#626f27",
    gray: "#858585",
    tan: "#b3a495",
    brown: "#746555",
    wood: "#ad7841",
    coffee: "#542f18"
  },
  // Lokasi drop point resmi (4 titik di Bandung)
  dropPoints: [
    {
      name: "Kozi Budara",
      address: "Jl. Bukit Dago Utara No. 28, Bandung",
      mapUrl: "https://maps.google.com/?q=Jl.+Bukit+Dago+Utara+No.+28+Bandung"
    },
    {
      name: "Kozi Dipatiukur",
      address: "Jl. Dipati Ukur No. 1, Bandung",
      mapUrl: "https://maps.google.com/?q=Jl.+Dipati+Ukur+No.+1+Bandung"
    },
    {
      name: "Kozi Malaka",
      address: "Jl. Halimun No. 36, Bandung",
      note: "Di dalam Malaka Hotel",
      mapUrl: "https://maps.google.com/?q=Jl.+Halimun+No.+36+Bandung"
    },
    {
      name: "Kamaniya Atelier",
      address: "Dago 169, Bandung",
      mapUrl: "https://maps.google.com/?q=Dago+169+Bandung"
    }
  ] as DropPoint[]
} as const;

export type SiteConfig = typeof siteConfig;
