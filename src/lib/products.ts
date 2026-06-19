export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  size: string;
  price: number;
  image: string;
  category: "Klasik" | "Premium" | "Edisi Khusus";
}

export const products: Product[] = [
  {
    id: "kunyit-asem",
    name: "Kunyit Asem",
    shortDesc: "Klasik yang menyegarkan.",
    description:
      "Perpaduan kunyit segar dan asam jawa pilihan. Rasa otentik yang sudah menjadi ciri khas Djamojo sejak 2012.",
    benefits: ["Mendukung metabolisme", "Menyegarkan tubuh", "Sumber antioksidan alami"],
    size: "250 ml",
    price: 18000,
    image: "/images/products/kunyit-asem.svg",
    category: "Klasik"
  },
  {
    id: "beras-kencur",
    name: "Beras Kencur",
    shortDesc: "Hangat untuk stamina harian.",
    description:
      "Beras dan kencur pilihan dengan sedikit jahe. Cocok diminum rutin untuk menjaga vitalitas dan kehangatan tubuh.",
    benefits: ["Meningkatkan stamina", "Menghangatkan tubuh", "Meredakan pegal"],
    size: "250 ml",
    price: 18000,
    image: "/images/products/beras-kencur.svg",
    category: "Klasik"
  },
  {
    id: "jahe-merah",
    name: "Jahe Merah",
    shortDesc: "Pedas hangat, anti-malas gerak.",
    description:
      "Ekstrak jahe merah pekat dengan sedikit madu lokal. Sensasi hangat yang tahan lama.",
    benefits: ["Menghangatkan tenggorokan", "Meningkatkan imunitas", "Relaksasi otot"],
    size: "250 ml",
    price: 20000,
    image: "/images/products/jahe-merah.svg",
    category: "Klasik"
  },
  {
    id: "temulawak",
    name: "Temulawak",
    shortDesc: "Warisan Nusantara, manfaat klinis.",
    description:
      "Curcuma xanthorrhiza murni dari petani lokal. Dikenal luas sebagai jamu penjaga hati dan pencernaan.",
    benefits: ["Menjaga fungsi hati", "Melancarkan pencernaan", "Meningkatkan nafsu makan"],
    size: "250 ml",
    price: 22000,
    image: "/images/products/temulawak.svg",
    category: "Premium"
  },
  {
    id: "sirih-merah",
    name: "Sirih Merah Premium",
    shortDesc: "Kewanitaan & kehangatan feminin.",
    description:
      "Sirih merah pilihan dengan sedikit kayu manis. Resep keluarga yang diperkenalkan kembali dalam kemasan modern.",
    benefits: ["Kesehatan area kewanitaan", "Antioksidan tinggi", "Meningkatkan sirkulasi"],
    size: "250 ml",
    price: 24000,
    image: "/images/products/sirih-merah.svg",
    category: "Premium"
  },
  {
    id: "edisi-langka",
    name: "Edisi Langka: Kencur Madu",
    shortDesc: "Limited release — stok terbatas.",
    description:
      "Varian edisi khusus yang hanya diproduksi pada musim tertentu. Perpaduan kencur segar dengan madu hutan lokal.",
    benefits: ["Stamina ekstra", "Manis alami tanpa pengawet", "Koleksi terbatas"],
    size: "250 ml",
    price: 28000,
    image: "/images/products/kencur-madu.svg",
    category: "Edisi Khusus"
  }
];
