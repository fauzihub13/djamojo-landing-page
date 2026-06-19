import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/Layout";

export const metadata: Metadata = {
  title: "SOP Sanitasi & Sterilisasi Food-Grade",
  description:
    "Proses 4 tahap sanitasi botol kaca Djamojo hingga standar higienitas food-grade."
};

export default function SanitasiPage() {
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
            <span className="eyebrow">SOP 5.2 — Sanitasi & Sterilisasi</span>
            <h1 className="heading-display">Standar higienitas yang tak bisa dikompromikan.</h1>
            <p className="mt-4 text-djamojo-green-700/85">
              Botol bekas yang dikembalikan konsumen diproses dalam 4 tahap
              hingga mencapai standar food-grade sebelum refill.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-djamojo-earth-100 bg-white shadow-lg">
            <div className="relative aspect-[1200/600] w-full">
              <Image
                src="/images/infographic-sanitasi.svg"
                alt="Infografis 4 tahap sanitasi food-grade: Dekontaminasi, Penyikatan, Sterilisasi 121°C, Inspeksi UV-C"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-green-700 text-djamojo-earth-50">
        <Container>
          <div className="rounded-3xl border border-djamojo-green-500/40 bg-djamojo-green-600/40 p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-djamojo-turmeric-400">
              Parameter Mutlak
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-serif text-3xl font-semibold text-djamojo-turmeric-400 sm:text-4xl">
                  121°C
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-djamojo-earth-100/80">
                  Suhu
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-djamojo-turmeric-400 sm:text-4xl">
                  15 psi
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-djamojo-earth-100/80">
                  Tekanan
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-djamojo-turmeric-400 sm:text-4xl">
                  ≥20 m
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-djamojo-earth-100/80">
                  Durasi
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="text-djamojo-earth-100/90">
              Ingin melihat proses ini secara visual?
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-djamojo-turmeric-500 px-6 py-3 font-medium text-djamojo-green-700 transition hover:bg-djamojo-turmeric-400"
            >
              Jadwalkan Kunjungan Pabrik <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
