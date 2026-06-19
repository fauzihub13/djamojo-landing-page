import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, MessageCircle, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-djamojo-earth-100 bg-djamojo-green-700 text-djamojo-earth-50">
      <div className="container-djamojo grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="inline-block" aria-label="Djamojo Beranda">
            <div className="rounded-xl bg-djamojo-earth-50 p-2 inline-block">
              <Image
                src="/images/brand/logo-djamojo.jpeg"
                alt="Djamojo by Djamoe Spirit"
                width={200}
                height={106}
                className="h-14 w-auto"
              />
            </div>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-djamojo-earth-100/90">
            Pionir jamu tradisional homemade siap minum dalam botol kaca sejak{" "}
            {siteConfig.established}. Berkomisi melestarikan resep nusantara
            melalui kemasan ramah lingkungan dan program ekonomi sirkular
            bersertifikat food-grade.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-djamojo-turmeric-400">
            Navigasi
          </p>
          <ul className="space-y-2 text-sm text-djamojo-earth-100/90">
            <li><Link href="/brand" className="hover:text-white">Cerita Djamojo</Link></li>
            <li><Link href="/produk" className="hover:text-white">Produk</Link></li>
            <li><Link href="/return-bottle" className="hover:text-white">Program Return Bottle</Link></li>
            <li><Link href="/edukasi" className="hover:text-white">Edukasi & Riset</Link></li>
            <li><Link href="/kontak" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-djamojo-turmeric-400">
            Hubungi Kami
          </p>
          <ul className="space-y-3 text-sm text-djamojo-earth-100/90">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-djamojo-turmeric-500" />
              Kota Bandung, Jawa Barat
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle size={16} className="mt-0.5 shrink-0 text-djamojo-turmeric-500" />
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
                className="hover:text-white"
              >
                WhatsApp Order
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-djamojo-turmeric-500" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram size={16} className="mt-0.5 shrink-0 text-djamojo-turmeric-500" />
              <a
                href={`https://instagram.com/${siteConfig.contact.instagram.replace("@", "")}`}
                className="hover:text-white"
              >
                {siteConfig.contact.instagram}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Linkedin size={16} className="mt-0.5 shrink-0 text-djamojo-turmeric-500" />
              <span>{siteConfig.contact.linkedin}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-djamojo-green-600/60">
        <div className="container-djamojo flex flex-col items-center justify-between gap-3 py-5 text-xs text-djamojo-earth-100/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Semua karya dilindungi.
          </p>
          <p>
            Didukung oleh riset sirkular ·{" "}
            {siteConfig.hashtags[0]} · {siteConfig.hashtags[1]}
          </p>
        </div>
      </div>
    </footer>
  );
}
