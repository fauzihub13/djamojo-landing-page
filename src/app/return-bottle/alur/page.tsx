import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, MapPin, Send, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Alur Pengembalian Botol",
  description: "Step-by-step pengembalian botol kaca Djamojo dari konsumen hingga drop point."
};

export default function AlurPage() {
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
            <span className="eyebrow">SOP 4.2 — Alur Pengembalian</span>
            <h1 className="heading-display">Empat langkah sederhana.</h1>
            <p className="mt-4 text-djamojo-green-700/85">
              Dirancang sesederhana mungkin agar siapa pun bisa berpartisipasi
              tanpa friksi.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-djamojo-earth-100 bg-white shadow-lg">
            <div className="relative aspect-[1200/520] w-full">
              <Image
                src="/images/infographic-alur.svg"
                alt="Infografis alur 4 langkah return bottle: Nikmati, Bilas, Drop/Kirim, Klaim Reward"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-earth-50">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-djamojo-green-100 text-djamojo-green-600">
                <MapPin size={18} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-djamojo-green-700">
                Drop Point Langsung (Bandung)
              </h3>
              <p className="mt-2 text-sm text-djamojo-green-700/80">
                Datang ke drop point resmi kami, serahkan botol, klaim reward
                secara instan. Tidak ada minimum jumlah botol.
              </p>
              <Link href="/kontak" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-djamojo-green-600">
                Lihat alamat drop point <ArrowRight size={16} />
              </Link>
            </div>
            <div className="card">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-djamojo-turmeric-100 text-djamojo-turmeric-600">
                <Send size={18} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-djamojo-green-700">
                Pengiriman Bulk (Luar Kota)
              </h3>
              <p className="mt-2 text-sm text-djamojo-green-700/80">
                Minimal 5 botol per pengiriman untuk efisiensi logistik balik.
                Bungkus aman dengan kardus tebal.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-djamojo-earth-500">
                Ongkos kirim ditanggung pengirim
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-green-700 text-djamojo-earth-50">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <Sparkles className="mx-auto mb-3 text-djamojo-turmeric-400 sm:mx-0" size={28} />
              <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                Lanjut ke skema hadiahnya.
              </h2>
              <p className="mt-2 max-w-xl text-djamojo-earth-100/90">
                Dua metode penukaran resmi: potongan langsung atau Green Points
                yang terakumulasi.
              </p>
            </div>
            <Link
              href="/return-bottle/insentif"
              className="inline-flex items-center gap-2 rounded-full bg-djamojo-turmeric-500 px-6 py-3 font-medium text-djamojo-green-700 transition hover:bg-djamojo-turmeric-400"
            >
              Lihat Skema Insentif <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
