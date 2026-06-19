import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Recycle,
  Truck,
  Coins,
  Sprout,
  Sparkles
} from "lucide-react";
import { Container, Section } from "@/components/Layout";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Program Return Bottle",
  description:
    "Program pengembalian botol kaca Djamojo yang bersertifikat food-grade. Hemat, lestari, dan berdayakan ekonomi sirkular.",
  openGraph: {
    title: "Program Return Bottle Djamojo — −90% Emisi, 20× Siklus",
    description:
      "Program pengembalian botol kaca Djamojo yang bersertifikat food-grade. Hemat, lestari, dan berdayakan ekonomi sirkular.",
    images: ["/images/og/og-return-bottle.svg"]
  }
};

const tujuanStrategis = [
  {
    icon: Sparkles,
    title: "Keunggulan Kompetitif Berkelanjutan",
    body: "Kemasan sirkular sebagai Unique Selling Proposition di tengah pasar minuman herbal berbiaya murah."
  },
  {
    icon: Sprout,
    title: "Green Perceived Value & Eco-Friendliness",
    body: "Memenuhi kebutuhan psikologis konsumen untuk berkontribusi pada pelestarian alam."
  },
  {
    icon: Coins,
    title: "Efisiensi Struktur Biaya",
    body: "Menekan pembelian botol baru dengan memaksimalkan tingkat pengembalian botol layak pakai."
  },
  {
    icon: Truck,
    title: "Mengatasi Hambatan Finansial",
    body: "Skema insentif sirkular yang menetralkan resistensi harga konsumen."
  }
];

const subPages = [
  {
    href: "/return-bottle/kenapa",
    label: "Mengapa Return Bottle?",
    desc: "Latar belakang krisis, regulasi, dan fakta ilmiah di balik program."
  },
  {
    href: "/return-bottle/alur",
    label: "Alur Pengembalian",
    desc: "Step-by-step: dari bilas, drop point / kirim balik, hingga klaim reward."
  },
  {
    href: "/return-bottle/sanitasi",
    label: "SOP Sanitasi Food-Grade",
    desc: "Proses 4 tahap dari dekontaminasi hingga sterilisasi autoclave 121°C."
  },
  {
    href: "/return-bottle/distribusi",
    label: "SOP Distribusi",
    desc: "Standar proteksi botol kaca tanpa bubble wrap plastik."
  },
  {
    href: "/return-bottle/insentif",
    label: "Skema Insentif",
    desc: "Potongan langsung Rp2.000 atau akumulasi Green Points 50 = 1 botol gratis."
  }
];

export default function ReturnBottlePage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-djamojo-earth-50 to-white pt-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Program Return Bottle</span>
            <h1 className="heading-display">
              Selesai minum?
              <br />
              <span className="text-djamojo-turmeric-600">Kembalikan botolnya.</span>
            </h1>
            <p className="mt-6 text-lg text-djamojo-green-700/85">
              Sistem logistik balik bersertifikat food-grade yang
              menghubungkan konsumen, brand, dan bumi dalam satu siklus
              berulang.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Empat Tujuan Strategis</span>
            <h2 className="heading-section">Mengapa kami berinvestasi di program ini.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {tujuanStrategis.map(({ icon: Icon, title, body }, idx) => (
              <RevealOnScroll key={title} delay={idx * 120}>
                <div className="card h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-djamojo-green-100 text-djamojo-green-600 transition-transform duration-500 hover:rotate-6 motion-reduce:hover:rotate-0">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-djamojo-green-700">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-djamojo-green-700/85">
                    {body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-earth-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Jelajahi Program</span>
            <h2 className="heading-section">Dokumentasi lengkap Return Bottle.</h2>
            <p className="mt-3 text-djamojo-green-700/80">
              Setiap halaman disusun berdasarkan SOP resmi yang telah
              terstandarisasi untuk transparansi penuh.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {subPages.map((p, idx) => (
              <RevealOnScroll key={p.href} delay={idx * 80}>
                <Link
                  href={p.href}
                  className="group block h-full rounded-2xl border border-djamojo-earth-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-djamojo-turmeric-500/40 hover:shadow-lg motion-reduce:hover:-translate-y-0"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-djamojo-turmeric-100 text-djamojo-turmeric-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-djamojo-turmeric-500 group-hover:text-white">
                    <Recycle size={18} />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-djamojo-green-700 transition-colors duration-300 group-hover:text-djamojo-turmeric-600">
                    {p.label}
                  </h3>
                  <p className="text-sm text-djamojo-green-700/75">{p.desc}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-djamojo-green-600 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
                    Buka halaman <ArrowRight size={16} />
                  </p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
