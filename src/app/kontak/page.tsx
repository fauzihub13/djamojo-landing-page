import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Instagram, Send, Linkedin, ExternalLink } from "lucide-react";
import { Container, Section } from "@/components/Layout";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak & Pemesanan",
  description: "Hubungi Djamojo — WhatsApp order, drop point, dan kemitraan.",
  openGraph: {
    title: "Kontak Djamojo — Mari Berkenalan, Mari Berjamu",
    description: "Hubungi Djamojo — WhatsApp order, drop point, dan kemitraan.",
    images: ["/images/og/og-kontak.svg"]
  }
};

export default function KontakPage() {
  const phone = siteConfig.contact.whatsapp.replace(/\D/g, "");

  return (
    <>
      <Section className="bg-gradient-to-b from-djamojo-turmeric-50 to-white pt-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <span className="eyebrow">Hubungi Kami</span>
            <h1 className="heading-display">
              Mari berkenalan,
              <br />
              <span className="text-djamojo-turmeric-600">mari berjamu.</span>
            </h1>
            <p className="mt-4 text-djamojo-green-700/85">
              Untuk pemesanan, kunjungan pabrik, atau kemitraan B2B — pilih
              kanal yang paling nyaman.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <RevealOnScroll delay={0}>
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent("Halo Djamojo, saya ingin memesan.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border-2 border-transparent bg-djamojo-green-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-djamojo-green-500 hover:shadow-lg motion-reduce:hover:-translate-y-0"
              >
                <MessageCircle className="mb-3 text-djamojo-green-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0" size={28} />
                <h3 className="font-serif text-xl font-semibold text-djamojo-green-700">WhatsApp</h3>
                <p className="mt-1 text-sm text-djamojo-green-700/80">
                  Respon paling cepat untuk pemesanan harian.
                </p>
                <p className="mt-auto pt-4 text-sm font-medium text-djamojo-green-600 group-hover:underline">
                  {siteConfig.contact.whatsapp} →
                </p>
              </a>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <a
                href={`https://instagram.com/${siteConfig.contact.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border-2 border-transparent bg-gradient-to-br from-purple-50 to-pink-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-djamojo-earth-400 hover:shadow-lg motion-reduce:hover:-translate-y-0"
              >
                <Instagram className="mb-3 text-djamojo-earth-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0" size={28} />
                <h3 className="font-serif text-xl font-semibold text-djamojo-green-700">Instagram</h3>
                <p className="mt-1 text-sm text-djamojo-green-700/80">
                  Update harian & behind-the-scenes.
                </p>
                <p className="mt-auto pt-4 text-sm font-medium text-djamojo-earth-500 group-hover:underline">
                  {siteConfig.contact.instagram} →
                </p>
              </a>
            </RevealOnScroll>

            <RevealOnScroll delay={240}>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex h-full flex-col rounded-2xl border-2 border-transparent bg-djamojo-turmeric-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-djamojo-turmeric-500 hover:shadow-lg motion-reduce:hover:-translate-y-0"
              >
                <Mail className="mb-3 text-djamojo-turmeric-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0" size={28} />
                <h3 className="font-serif text-xl font-semibold text-djamojo-green-700">Email</h3>
                <p className="mt-1 text-sm text-djamojo-green-700/80">
                  Untuk pertanyaan riset, pers, dan kemitraan.
                </p>
                <p className="mt-auto pt-4 text-sm font-medium text-djamojo-turmeric-600 group-hover:underline">
                  {siteConfig.contact.email} →
                </p>
              </a>
            </RevealOnScroll>

            <RevealOnScroll delay={360}>
              <div className="group flex h-full flex-col rounded-2xl border-2 border-transparent bg-blue-50/50 p-6 transition-all duration-500">
                <Linkedin className="mb-3 text-djamojo-earth-500" size={28} />
                <h3 className="font-serif text-xl font-semibold text-djamojo-green-700">LinkedIn</h3>
                <p className="mt-1 text-sm text-djamojo-green-700/80">
                  Untuk kerja sama korporat & B2B.
                </p>
                <p className="mt-auto pt-4 text-sm font-medium text-djamojo-earth-500">
                  {siteConfig.contact.linkedin}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>

      <Section className="bg-djamojo-earth-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Drop Point Resmi</span>
            <h2 className="heading-section">Lokasi pengembalian botol.</h2>
            <p className="mt-3 text-djamojo-green-700/80">
              Empat titik di Kota Bandung — datangi untuk klaim reward instan
              tanpa ongkos kirim.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {siteConfig.dropPoints.map((d, idx) => (
              <RevealOnScroll key={d.name} delay={idx * 100}>
                <a
                  href={d.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-djamojo-earth-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-djamojo-turmeric-500 hover:shadow-lg motion-reduce:hover:-translate-y-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-djamojo-green-100 text-djamojo-green-600">
                        <MapPin size={18} />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-djamojo-green-700 transition-colors duration-300 group-hover:text-djamojo-turmeric-600">
                        {d.name}
                      </h3>
                      <p className="mt-1 text-sm text-djamojo-green-700/85">
                        {d.address}
                      </p>
                      {d.note && (
                        <p className="mt-2 inline-block rounded-full bg-djamojo-turmeric-50 px-2.5 py-0.5 text-xs font-medium text-djamojo-turmeric-600">
                          {d.note}
                        </p>
                      )}
                    </div>
                    <ExternalLink
                      size={16}
                      className="shrink-0 text-djamojo-earth-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-djamojo-turmeric-600 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:-translate-y-0"
                    />
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-djamojo-green-500 to-djamojo-green-700 p-8 text-djamojo-turmeric-50 sm:p-10">
            <Send className="mb-3 text-djamojo-turmeric-500" size={28} />
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Tertarik menjadi mitra retail?
            </h2>
            <p className="mt-2 max-w-xl text-djamojo-turmeric-100">
              Kami membuka kerja sama dengan kafe, hotel, dan toko organik yang
              ingin membawa Djamojo ke pelanggan mereka.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Kemitraan B2B Djamojo")}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-djamojo-turmeric-500 px-6 py-3 font-medium text-djamojo-green-700 transition hover:bg-djamojo-turmeric-400 hover:shadow-lg"
            >
              Ajukan Kemitraan
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
