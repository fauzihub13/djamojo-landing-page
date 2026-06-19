import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Globe2, Leaf, Recycle } from "lucide-react";
import { Container, Section } from "@/components/Layout";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Edukasi & Riset",
  description: "Sumber belajar ekonomi sirkular, regulasi, dan studi kasus Djamojo.",
  openGraph: {
    title: "Edukasi & Riset Djamojo — Teori, Regulasi, Studi Kasus",
    description: "Sumber belajar ekonomi sirkular, regulasi, dan studi kasus Djamojo.",
    images: ["/images/og/og-edukasi.svg"]
  }
};

const topics = [
  {
    icon: Recycle,
    title: "Ekonomi Sirkular: Teori & Data",
    body: "Prinsip 3R (Reduce, Reuse, Recycle), life cycle assessment, dan penerapan pada UMKM minuman."
  },
  {
    icon: FileText,
    title: "Regulasi & SDGs",
    body: "Permen LHK P.75/2019, SDGs Poin 12.5, dan implikasinya bagi produser kecil-menengah."
  },
  {
    icon: Leaf,
    title: "Sustainability Signaling",
    body: "Bagaimana komunikasi hijau mempengaruhi Purchase Intention dan Green Perceived Value."
  },
  {
    icon: Globe2,
    title: "Green Attitude-Behavior Gap",
    body: "Mengapa konsumen berkata iya hijau, tapi bertindak tidak? Pelajaran untuk brand."
  }
];

const articles = [
  {
    href: "/return-bottle/kenapa",
    eyebrow: "Artikel Pilar",
    title: "Mengapa Return Bottle?",
    excerpt: "Sains, regulasi, dan janji Djamojo kepada bumi."
  }
];

export default function EdukasiPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-djamojo-earth-50 to-white pt-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Edukasi & Riset</span>
            <h1 className="heading-display">Buka kulkas ilmu, pahami dampaknya.</h1>
            <p className="mt-4 text-djamojo-green-700/85">
              Layer informatif-akademik untuk konsumen, akademisi, jurnalis,
              dan mitra yang ingin mendalami dasar di balik setiap keputusan
              Djamojo.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {topics.map(({ icon: Icon, title, body }, idx) => (
              <RevealOnScroll key={title} delay={idx * 100}>
                <div className="card h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-djamojo-green-100 text-djamojo-green-600 transition-transform duration-500 hover:rotate-6 motion-reduce:hover:rotate-0">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-djamojo-green-700">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-djamojo-green-700/80">{body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-earth-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Publikasi</span>
            <h2 className="heading-section">Artikel pilar dari Djamojo.</h2>
          </div>
          <div className="mt-8 grid place-items-center gap-6">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group block w-full max-w-md rounded-2xl border border-djamojo-earth-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-djamojo-turmeric-600">
                  <BookOpen size={14} /> {a.eyebrow}
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold text-djamojo-green-700 group-hover:text-djamojo-turmeric-600">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-djamojo-green-700/80">{a.excerpt}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-djamojo-green-600">
                  Baca selengkapnya <ArrowRight size={16} />
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-djamojo-earth-100 bg-white p-6 sm:p-8">
            <p className="eyebrow">Riset & Sumber Primer</p>
            <ul className="mt-4 space-y-2 text-sm text-djamojo-green-700/85">
              <li>· SIPSN — Sistem Informasi Pengelolaan Sampah Nasional, KLHK.</li>
              <li>· Permen LHK No. P.75/MENLHK/SETJEN/KUM.1/10/2019.</li>
              <li>· Gheewala, S. (2023). Life cycle assessment of glass bottle reuse systems.</li>
              <li>· Booklet SOP Sirkular Djamojo (Politeknik Negeri Bandung, 2026).</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
