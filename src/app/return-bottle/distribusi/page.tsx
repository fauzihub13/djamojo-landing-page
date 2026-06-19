import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box, Package, Tag, Truck } from "lucide-react";
import { Container, Section } from "@/components/Layout";

export const metadata: Metadata = {
  title: "SOP Distribusi & Perlindungan Kemasan Kaca",
  description: "Standar proteksi botol kaca Djamojo tanpa plastik bubble wrap."
};

const items = [
  {
    icon: Box,
    code: "EFP2 & EFP4",
    title: "Sortir Kelayakan Botol",
    body: "Inspeksi visual 100% pada setiap botol sebelum pengisian. Wajib bebas dari keretakan mikro, gompel pada bibir botol, dan ulir tutup yang aus."
  },
  {
    icon: Package,
    code: "PEF4 & PEF5",
    title: "Proteksi Sekunder Organik",
    body: "Menghentikan total penggunaan plastik bubble wrap. Pengiriman luar kota menggunakan corrugated cardboard dividers atau molded pulp packaging."
  },
  {
    icon: Tag,
    code: "EFP1 & EFP6",
    title: "Penyegelan Eco-Friendly",
    body: "Segel tutup menggunakan water-activated paper tape atau bahan bio-degradable selulosa, menggantikan segel plastik shrink-wrap konvensional."
  },
  {
    icon: Truck,
    code: "PVSP1",
    title: "Manajemen Pengiriman",
    body: "Stiker 'FRAGILE - GLASSWEAR' berbahan kertas. Ekspedisi khusus kargo dengan klausul asuransi pecah belah untuk pengiriman luar kota."
  }
];

export default function DistribusiPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-djamojo-earth-50 to-white pt-12">
        <Container>
          <Link
            href="/return-bottle"
            className="inline-flex items-center gap-1 text-sm font-medium text-djamojo-green-600 hover:text-djamojo-turmeric-600"
          >
            ← Kembali ke Program Return Bottle
          </Link>
          <div className="mx-auto mt-6 max-w-3xl text-center">
            <span className="eyebrow">SOP 3.2 — Distribusi Ramah Lingkungan</span>
            <h1 className="heading-display">Bungkus tanpa bubble wrap, kirim tanpa kompromi.</h1>
            <p className="mt-4 text-djamojo-green-700/85">
              Pilar EFP Structure — proteksi botol kaca yang konsisten dengan
              identitas ramah lingkungan merek.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.title} className="card">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-djamojo-turmeric-100 text-djamojo-turmeric-600">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full bg-djamojo-green-50 px-3 py-1 text-xs font-mono font-semibold text-djamojo-green-700">
                      {i.code}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-djamojo-green-700">
                    {i.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-djamojo-green-700/80">
                    {i.body}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-earth-50">
        <Container>
          <div className="rounded-3xl bg-white p-8 sm:p-10">
            <span className="eyebrow">Catatan Sustainability Signaling</span>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-djamojo-green-700 sm:text-3xl">
              Kemasan adalah ucapan pertama merek Anda.
            </h2>
            <p className="mt-3 max-w-2xl text-djamojo-green-700/85">
              Konsumen modern tidak hanya menilai produk, tetapi juga
              ekosistem yang mengelilinginya. Setiap detail pengepakan adalah
              isyarat keberlanjutan — dan kami tidak main-main.
            </p>
            <Link
              href="/edukasi"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-djamojo-green-600 hover:text-djamojo-turmeric-600"
            >
              Pelajari teori di baliknya <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
