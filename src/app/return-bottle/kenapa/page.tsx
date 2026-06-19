import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { Container, Section } from "@/components/Layout";
import { articleMengapaReturnBottle } from "@/content/artikel-mengapa-return-bottle";

export const metadata: Metadata = {
  title: "Mengapa Return Bottle? Riset & Regulasi di Baliknya",
  description: articleMengapaReturnBottle.excerpt
};

export default function MengapaReturnBottlePage() {
  const article = articleMengapaReturnBottle;
  return (
    <>
      <Section className="bg-gradient-to-b from-djamojo-turmeric-50 to-white pt-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <Link
              href="/return-bottle"
              className="inline-flex items-center gap-1 text-sm font-medium text-djamojo-green-600 hover:text-djamojo-turmeric-600"
            >
              ← Kembali ke Program Return Bottle
            </Link>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-djamojo-turmeric-600">
              <span className="inline-flex items-center gap-1">
                <BookOpen size={14} /> Artikel Pilar
              </span>
              <span>·</span>
              <span>{article.readingTime} baca</span>
              <span>·</span>
              <span>{article.publishedAt}</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-djamojo-green-700 sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-djamojo-green-700/85">
              {article.excerpt}
            </p>
            <p className="mt-4 text-sm text-djamojo-earth-500">
              Disusun berdasarkan Booklet SOP Sirkular Djamojo (Mita Tri
              Hapsari Jasmine, Politeknik Negeri Bandung, 2026) dan sumber
              primer terkait.
            </p>
          </div>
          <div className="relative mx-auto mt-10 aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-djamojo-earth-100 shadow-2xl shadow-djamojo-earth-600/20 animate-fade-in-up delay-200 sm:aspect-[4/5]">
            <Image
              src="/images/brand/bottle-shot.jpeg"
              alt="Botol kaca Djamojo — Program Return Bottle"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 640px) 28rem, 100vw"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <article className="prose-djamojo mx-auto max-w-3xl">
            <div className="not-prose mb-10 overflow-hidden rounded-3xl border border-djamojo-earth-100 bg-white shadow-lg">
              <div className="relative aspect-[1200/700] w-full">
                <Image
                  src="/images/infographic-emisi.svg"
                  alt="Perbandingan emisi: botol plastik sekali pakai, botol kaca baru, dan botol Djamojo sirkular"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="px-5 py-3 text-center text-xs uppercase tracking-[0.16em] text-djamojo-earth-500">
                Visualisasi 1: Perbandingan emisi per siklus pakai
              </p>
            </div>

            {article.sections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2>{section.heading}</h2>
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {section.callout && (
                  <blockquote>{section.callout}</blockquote>
                )}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.factbox && (
                  <div className="my-6 rounded-2xl border-l-4 border-djamojo-turmeric-500 bg-djamojo-turmeric-50 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-djamojo-turmeric-600">
                      Fakta Penting
                    </p>
                    <p className="mt-1 font-serif text-lg text-djamojo-green-700">
                      {section.factbox.title}
                    </p>
                    <p className="mt-2 text-sm text-djamojo-green-700/85">
                      {section.factbox.body}
                    </p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-12 rounded-2xl border border-djamojo-earth-100 bg-djamojo-earth-50 p-6 not-prose">
              <p className="eyebrow">Referensi</p>
              <ul className="mt-3 space-y-2 text-sm text-djamojo-green-700/85">
                {article.references.map((r) => (
                  <li key={r} className="flex gap-2">
                    <FileText size={14} className="mt-1 shrink-0 text-djamojo-turmeric-600" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mt-4 rounded-3xl bg-djamojo-green-700 p-8 text-center sm:p-10">
              <h2 className="font-serif text-2xl font-semibold text-djamojo-turmeric-50 sm:text-3xl">
                Tertib administrasi, tertib dampak.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-djamojo-turmeric-100 sm:text-lg">
                Setelah memahami mengapa, mari lihat bagaimana kami
                mengeksekusinya di lapangan.
              </p>
              <Link
                href="/return-bottle/alur"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-djamojo-turmeric-500 px-6 py-3 font-medium text-djamojo-green-700 transition hover:bg-djamojo-turmeric-400"
              >
                Lanjut: Alur Pengembalian <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
