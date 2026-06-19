import type { Metadata } from "next";
import { Coins, Gift } from "lucide-react";
import { Container, Section } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Skema Insentif Return Bottle",
  description: "Potongan harga langsung dan Green Points dari Djamojo."
};

export default function InsentifPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-djamojo-earth-50 to-white pt-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">SOP 4.3 — Skema Insentif Finansial</span>
            <h1 className="heading-display">
              Dua cara untuk dihargai.
            </h1>
            <p className="mt-4 text-djamojo-green-700/85">
              Kami tidak membebankan biaya lingkungan ke harga dasar produk.
              Sebagai gantinya, Anda memilih reward yang paling sesuai.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-djamojo-green-600 bg-djamojo-green-50/40 p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-djamojo-green-600 text-white">
                <Coins size={22} />
              </div>
              <h2 className="mt-4 font-serif text-2xl font-semibold text-djamojo-green-700">
                Metode Potongan Langsung
              </h2>
              <p className="text-sm uppercase tracking-[0.16em] text-djamojo-turmeric-600">
                Cash-back / Deposit
              </p>
              <div className="mt-6 rounded-xl bg-white p-5">
                <p className="font-serif text-4xl font-semibold text-djamojo-turmeric-600">
                  Rp2.000
                </p>
                <p className="mt-1 text-sm text-djamojo-green-700/85">
                  per botol yang dikembalikan ke Drop Point resmi
                </p>
              </div>
              <p className="mt-6 text-sm text-djamojo-green-700/85">
                Berlaku sebagai potongan harga instan untuk pembelian varian
                jamu apa saja pada transaksi saat itu juga.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-djamojo-turmeric-500 bg-djamojo-turmeric-50/40 p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-djamojo-turmeric-500 text-djamojo-green-700">
                <Gift size={22} />
              </div>
              <h2 className="mt-4 font-serif text-2xl font-semibold text-djamojo-green-700">
                Djamojo Green Points
              </h2>
              <p className="text-sm uppercase tracking-[0.16em] text-djamojo-turmeric-600">
                Loyalitas Berkelanjutan
              </p>
              <div className="mt-6 rounded-xl bg-white p-5">
                <p className="font-serif text-4xl font-semibold text-djamojo-turmeric-600">
                  10 poin
                </p>
                <p className="mt-1 text-sm text-djamojo-green-700/85">
                  per botol, dikreditkan ke database pelanggan
                </p>
              </div>
              <p className="mt-6 text-sm text-djamojo-green-700/85">
                Kumpulkan <strong>50 Green Points</strong> (setara 5 botol)
                untuk menukar <strong>1 botol Djamojo gratis 250ml</strong>{" "}
                pilihan Anda.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-djamojo-earth-100 bg-djamojo-earth-50 p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-djamojo-green-700">
              Tujuan Skema Ini
            </h3>
            <p className="mt-2 text-sm text-djamojo-green-700/85">
              Mengatasi Price Consciousness — sensitivitas harga konsumen yang
              menjadi salah satu hambatan terbesar adopsi produk ramah
              lingkungan. Dengan reward terstruktur, kontribusi lingkungan
              tidak lagi identik dengan beban finansial.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
