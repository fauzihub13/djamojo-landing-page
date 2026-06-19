"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  const phone = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(
    "Halo Djamojo, saya tertarik dengan produk dan ingin mengetahui lebih lanjut."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-djamojo-green-700/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/40 sm:bottom-8 sm:right-8 motion-reduce:hover:scale-100"
      aria-label="Pesan via WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 transition-opacity duration-300 group-hover:opacity-20 group-hover:animate-ping" />
      <MessageCircle size={26} className="relative z-10 transition-transform duration-300 group-hover:rotate-12 motion-reduce:group-hover:rotate-0" />
    </a>
  );
}
