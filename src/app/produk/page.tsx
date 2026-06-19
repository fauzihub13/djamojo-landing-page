import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import { Container, Section } from "@/components/Layout";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Varian Jamu",
  description: "Katalog lengkap varian jamu tradisional Djamojo dalam botol kaca.",
  openGraph: {
    title: "Varian Jamu Djamojo — Enam Rasa, Satu Komitmen",
    description: "Katalog lengkap varian jamu tradisional Djamojo dalam botol kaca.",
    images: ["/images/og/og-produk.svg"]
  }
};

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(n);

export default function ProdukPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-djamojo-earth-50 to-white pt-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Katalog Varian</span>
            <h1 className="heading-display">Racikan otentik, dikemas dalam botol kaca.</h1>
            <p className="mt-4 text-djamojo-green-700/85">
              Semua varian diproduksi homemade dari bahan alami pilihan. Sekali
              nikmati, botol kembali — siklus berlanjut.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, idx) => (
              <RevealOnScroll key={p.id} delay={idx * 80}>
                <article
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-djamojo-earth-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-djamojo-turmeric-500/40 motion-reduce:hover:-translate-y-0"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-djamojo-green-50 to-djamojo-turmeric-50">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-djamojo-green-700/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-djamojo-turmeric-400 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-serif text-xl font-semibold text-djamojo-green-700 transition-colors duration-300 group-hover:text-djamojo-turmeric-600">
                      {p.name}
                    </h2>
                    <p className="mt-2 text-sm italic text-djamojo-earth-500">
                      {p.shortDesc}
                    </p>
                    <p className="mt-3 text-sm text-djamojo-green-700/80">
                      {p.description}
                    </p>
                    <ul className="mt-4 space-y-1.5 text-sm text-djamojo-green-700/85">
                      {p.benefits.map((b) => (
                        <li key={b} className="flex gap-2">
                          <Leaf size={14} className="mt-1 shrink-0 text-djamojo-turmeric-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between border-t border-djamojo-earth-100 pt-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-djamojo-earth-500">
                          {p.size}
                        </p>
                        <p className="font-serif text-xl font-semibold text-djamojo-green-700">
                          {formatIDR(p.price)}
                        </p>
                      </div>
                      <Link
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                          `Halo, saya ingin memesan ${p.name} (${p.size}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-product"
                      >
                        Pesan <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-earth-50">
        <Container>
          <div className="rounded-3xl bg-white p-8 sm:p-10 text-center">
            <h2 className="font-serif text-2xl font-semibold text-djamojo-green-700 sm:text-3xl">
              Beli banyak? Kembalikan botolnya. Hemat hingga gratis.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-djamojo-green-700/80">
              Pelajari skema Green Points dan potongan langsung yang membuat
              setiap botol Djamojo semakin bernilai.
            </p>
            <Link
              href="/return-bottle/insentif"
              className="mt-6 inline-flex items-center gap-2 btn-primary"
            >
              Lihat Skema Insentif <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
