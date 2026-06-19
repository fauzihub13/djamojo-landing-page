import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart, Leaf, Recycle, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/Layout";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cerita Djamojo",
  description:
    "Kisah Djamojo by Djamoe Spirit — dari homemade di Bandung hingga pionir ekonomi sirkular UMKM.",
  openGraph: {
    title: "Cerita Djamojo — Dari Dapur Rumahan untuk Bumi Lestari",
    description:
      "Kisah Djamojo by Djamoe Spirit — dari homemade di Bandung hingga pionir ekonomi sirkular UMKM.",
    images: ["/images/og/og-brand.svg"]
  }
};

const values = [
  { icon: Leaf, title: "Autentik", body: "Resep turun-temurun, produksi homemade, rasa yang tidak bisa dipalsukan." },
  { icon: Heart, title: "Bertanggung Jawab", body: "Sirkular, food-grade, terdokumentasi. Bukan sekadar klaim." },
  { icon: Sparkles, title: "Edukatif", body: "Terbuka terhadap riset dan keterbukaan proses untuk semua pihak." },
  { icon: Recycle, title: "Kepercayaan Diri yang Tenang", body: "Pionir, bukan ikut-ikutan tren." }
];

const timeline = [
  { year: "2012", text: "Djamojo berdiri sebagai produsen jamu tradisional homemade di Kota Bandung." },
  { year: "Awal", text: "Keputusan strategis: menggunakan botol kaca sejak hari pertama demi menjaga rasa, higienitas, dan komitmen lingkungan." },
  { year: "Tantangan", text: "Program return bottle awal gagal karena tidak ada standarisasi logistik balik." },
  { year: "2026", text: "Booklet SOP Sirkular diterbitkan (Politeknik Negeri Bandung) — program return bottle direkonstruksi berbasis riset." }
];

const prosesList = [
  {
    src: "/images/proses/01-bahan-baku.svg",
    alt: "Pemilihan bahan baku dari petani lokal",
    title: "Pemilihan Bahan",
    desc: "Kunyit, jahe, kencur, dan temulawak dipilih langsung dari petani lokal Bandung."
  },
  {
    src: "/images/proses/02-memasak.svg",
    alt: "Proses memasak dengan tungku kayu tradisional",
    title: "Pemasakan Tradisional",
    desc: "Resep keluarga dimasak di atas tungku kayu — cara yang sudah teruji lintas generasi."
  },
  {
    src: "/images/proses/03-pengisian.svg",
    alt: "Pengisian botol kaca di lini produksi",
    title: "Pengisian Higienis",
    desc: "Lini pengisian manual dalam batch kecil untuk menjaga kualitas dan kesegaran."
  },
  {
    src: "/images/proses/04-penyegelan.svg",
    alt: "Penyegelan tutup dan pelabelan botol",
    title: "Penyegelan & Pelabelan",
    desc: "Tutup disegel dengan kertas eco-friendly, label dengan informasi lengkap."
  },
  {
    src: "/images/proses/05-qc.svg",
    alt: "Quality control dengan inspeksi UV-C",
    title: "Inspeksi QC 100%",
    desc: "Setiap botol melewati inspeksi visual dan UV-C sebelum dikemas untuk dikirim."
  }
];

export default function BrandPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-djamojo-turmeric-50 to-white pt-12">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-left">
              <span className="eyebrow">Cerita Djamojo</span>
              <h1 className="heading-display">
                Dari dapur rumahan,
                <br />
                <span className="text-djamojo-turmeric-600">untuk Indonesia yang lestari.</span>
              </h1>
              <p className="mt-6 text-lg text-djamojo-green-700/85">
                {siteConfig.name} adalah UMKM pionir yang berdiri sejak {siteConfig.established}.
                Kami percaya bahwa melestarikan jamu tidak cukup hanya dengan resep —
                perlu juga kemasan yang menghormati bumi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/return-bottle" className="btn-primary">
                  Pelajari Return Bottle
                </Link>
                <Link href="/edukasi" className="btn-secondary">
                  Riset di Baliknya
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-right delay-200">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-djamojo-earth-100 shadow-2xl shadow-djamojo-earth-600/20">
                <Image
                  src="/images/brand/lifestyle-wide.jpeg"
                  alt="Proses produksi dan kehidupan Djamojo by Djamoe Spirit"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden rounded-2xl border border-djamojo-earth-100 bg-djamojo-turmeric-500 p-4 shadow-lg sm:block">
                <p className="text-xs uppercase tracking-[0.16em] text-djamojo-earth-700">
                  Sejak
                </p>
                <p className="font-serif text-2xl font-semibold text-djamojo-green-700">
                  2012
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }, idx) => (
              <RevealOnScroll key={title} delay={idx * 100}>
                <div className="card h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-djamojo-green-100 text-djamojo-green-600 transition-transform duration-500 hover:rotate-12 motion-reduce:hover:rotate-0">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-djamojo-green-700">{title}</h3>
                  <p className="mt-2 text-sm text-djamojo-green-700/80">{body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-earth-50">
        <Container>
          <div className="mx-auto max-w-2xl">
            <span className="eyebrow">Perjalanan Singkat</span>
            <h2 className="heading-section">Tonggak penting Djamojo.</h2>
          </div>
          <ol className="mx-auto mt-10 max-w-3xl space-y-6">
            {timeline.map((t, idx) => (
              <RevealOnScroll
                key={t.year}
                delay={idx * 100}
                as="li"
                className="flex gap-6 rounded-2xl border border-djamojo-earth-100 bg-white p-6 transition-all duration-300 hover:border-djamojo-turmeric-500/40 hover:shadow-md"
              >
                <span className="font-serif text-2xl font-semibold text-djamojo-turmeric-600 sm:text-3xl">
                  {t.year}
                </span>
                <p className="text-djamojo-green-700/85">{t.text}</p>
              </RevealOnScroll>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Behind the Scenes</span>
            <h2 className="heading-section">Lima langkah di setiap botol.</h2>
            <p className="mt-3 text-djamojo-green-700/80">
              Dari tangan ke tangan — saksikan bagaimana setiap botol Djamojo
              lahir.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {prosesList.map((p, idx) => (
              <RevealOnScroll key={p.src} delay={idx * 100}>
                <article className="group h-full overflow-hidden rounded-2xl border border-djamojo-earth-100 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-djamojo-turmeric-500/40 hover:shadow-xl motion-reduce:hover:-translate-y-0">
                  <div className="relative aspect-[5/4] w-full overflow-hidden bg-djamojo-earth-50">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-djamojo-green-700/95 font-serif text-sm font-semibold text-djamojo-turmeric-400 backdrop-blur-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-djamojo-green-700 transition-colors duration-300 group-hover:text-djamojo-turmeric-600">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-djamojo-green-700/80">{p.desc}</p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-green-700 text-djamojo-earth-50">
        <Container>
          <div className="rounded-3xl border border-djamojo-green-500/40 bg-djamojo-green-600/30 p-8 sm:p-10 text-center">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Pionir memang sepi, tapi jejaknya jelas.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-djamojo-earth-100/90">
              Pelajari sistem yang kami bangun: transparan, terstandar, dan
              terukur dampaknya.
            </p>
            <Link
              href="/return-bottle"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-djamojo-turmeric-500 px-6 py-3 font-medium text-djamojo-green-700 transition hover:bg-djamojo-turmeric-400"
            >
              Lihat Program Return Bottle
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
