import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Recycle, ShieldCheck, Sprout } from "lucide-react";
import { Container, Section } from "@/components/Layout";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/site";

const usps = [
  {
    icon: Leaf,
    title: "Resep Otentik Homemade",
    body: "Setiap botol diseduh dari racikan jamu tradisional yang telah terjaga keasliannya sejak 2012."
  },
  {
    icon: Recycle,
    title: "Botol Kaca Sirkular",
    body: "Kemasan yang sama digunakan berulang kali — diproses higienis food-grade, bukan sekali pakai."
  },
  {
    icon: ShieldCheck,
    title: "Standar Food-Grade",
    body: "Sterilisasi uap 121°C / 15 psi selama 20 menit. Standar yang sama untuk industri farmasi."
  },
  {
    icon: Sprout,
    title: "Berkontribusi Nyata",
    body: "Setiap pengembalian botol memotong emisi hingga 90% dibanding produksi botol baru."
  }
];

const stats = [
  { value: "90%", label: "Pengurangan emisi per siklus" },
  { value: "20×", label: "Siklus pakai tiap botol" },
  { value: "121°C", label: "Standar sterilisasi food-grade" },
  { value: "2012", label: "Tahun berdiri" }
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-djamojo-earth-50 via-djamojo-earth-50 to-white pt-12 sm:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-djamojo-green-100/60 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-djamojo-turmeric-100/50 blur-3xl"
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-left">
              <span className="eyebrow animate-fade-in-down delay-100">Pionir Jamu Sirkular · Bandung</span>
              <h1 className="heading-display animate-fade-in-up delay-200">
                Jamu Autentik,
                <br />
                <span className="text-djamojo-turmeric-600">Bumi Lestari.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-djamojo-green-700/85 animate-fade-in-up delay-300">
                Djamojo by Djamoe Spirit adalah produsen jamu tradisional
                homemade siap minum dalam botol kaca. Sekali nikmati, botol
                kembali — dan bumi sedikit lebih bernapas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up delay-400">
                <Link href="/produk" className="btn-primary">
                  Lihat Varian Jamu
                  <ArrowRight size={18} />
                </Link>
                <Link href="/return-bottle" className="btn-secondary">
                  Pelajari Return Bottle
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-djamojo-earth-500 animate-fade-in delay-500">
                <span>● {siteConfig.hashtags[0]}</span>
                <span>● {siteConfig.hashtags[1]}</span>
              </div>
            </div>

            <div className="relative animate-fade-in-right delay-200">
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-djamojo-green-100 to-djamojo-turmeric-100 shadow-2xl shadow-djamojo-earth-600/20 transition-transform duration-700 hover:scale-[1.02] hover:shadow-3xl motion-reduce:hover:scale-100">
                <Image
                  src="/images/brand/product-portrait.jpeg"
                  alt="Foto produk jamu Djamojo by Djamoe Spirit dalam botol kaca"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-djamojo-earth-100 bg-white p-4 shadow-lg animate-float sm:block">
                <p className="text-xs uppercase tracking-[0.16em] text-djamojo-turmeric-600">
                  Emisi Dipotong
                </p>
                <p className="font-serif text-2xl font-semibold text-djamojo-green-700">
                  −90%
                </p>
                <p className="text-xs text-djamojo-earth-500">per siklus botol</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* USP GRID */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Mengapa Djamojo</span>
            <h2 className="heading-section">
              Lebih dari sekadar minuman, ini adalah pergerakan.
            </h2>
            <p className="mt-4 text-djamojo-green-700/80">
              Empat pilar yang membuat Djamojo berbeda dari produsen jamu
              kemasan massal.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map(({ icon: Icon, title, body }, idx) => (
              <RevealOnScroll key={title} delay={idx * 100}>
                <div className="card h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-djamojo-green-100 text-djamojo-green-600 transition-transform duration-500 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-djamojo-green-700">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-djamojo-green-700/80">
                    {body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* STATS */}
      <Section className="bg-djamojo-green-700 text-djamojo-earth-50">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, idx) => (
              <RevealOnScroll
                key={s.label}
                delay={idx * 120}
                className="text-center sm:text-left"
              >
                <p className="font-serif text-4xl font-semibold text-djamojo-turmeric-400 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-djamojo-earth-100/80">
                  {s.label}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* RETURN BOTTLE TEASER */}
      <Section className="bg-djamojo-earth-50">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Program Unggulan</span>
              <h2 className="heading-section">
                Selesai minum? Kembalikan botolnya.
              </h2>
              <p className="mt-4 text-djamojo-green-700/80">
                Program Return Bottle Djamojo adalah sistem logistik balik
                bersertifikat food-grade. Setiap botol yang kembali
                membersihkan dirinya secara menyeluruh — dari dekontaminasi,
                penyikatan mekanis, hingga sterilisasi uap autoclave — sebelum
                diisi ulang untuk perjalanan berikutnya.
              </p>
              <ul className="mt-6 space-y-2 text-djamojo-green-700/85">
                <li>✓ Potongan Rp2.000 per botol di drop point</li>
                <li>✓ 10 Green Points = tukar 1 botol gratis (250ml)</li>
                <li>✓ Mendukung ekonomi sirkular UMKM</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/return-bottle" className="btn-primary">
                  Pelajari Program Lengkap
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/return-bottle/kenapa"
                  className="btn-secondary"
                >
                  Riset di Baliknya
                </Link>
              </div>
            </div>

            <RevealOnScroll className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-djamojo-earth-50 to-white shadow-xl shadow-djamojo-green-700/10">
              <Image
                src="/images/cycle-stages.svg"
                alt="4 tahap siklus sirkular botol Djamojo: Sortir, Sanitasi, QC, Refill"
                fill
                className="object-contain p-2 transition-transform duration-700 hover:rotate-2 motion-reduce:hover:rotate-0"
              />
            </RevealOnScroll>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-djamojo-green-600 to-djamojo-green-700 p-10 text-center text-djamojo-earth-50 sm:p-14">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Siap menjamu tubuh dan bumi sekaligus?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-djamojo-earth-100/90">
              Pesan varian jamu favoritmu hari ini — atau langsung kunjungi
              drop point kami di Bandung untuk klaim Green Points pertama.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/produk"
                className="inline-flex items-center gap-2 rounded-full bg-djamojo-turmeric-500 px-6 py-3 font-medium text-djamojo-green-700 transition hover:bg-djamojo-turmeric-400"
              >
                Pesan Sekarang
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 rounded-full border border-djamojo-earth-50/40 px-6 py-3 font-medium text-djamojo-earth-50 transition hover:bg-djamojo-green-500"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
