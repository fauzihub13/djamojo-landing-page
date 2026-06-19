"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/brand", label: "Cerita Djamojo" },
  { href: "/produk", label: "Produk" },
  { href: "/return-bottle", label: "Return Bottle" },
  { href: "/edukasi", label: "Edukasi" },
  { href: "/kontak", label: "Kontak" }
];

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup mobile menu setiap pindah halaman
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock scroll saat menu terbuka
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ESC untuk tutup
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-djamojo-earth-100/60 bg-djamojo-earth-50/95 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-djamojo-earth-50/0"
        }`}
      >
        <div className="container-djamojo flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-[1.02] motion-reduce:hover:scale-100"
            aria-label="Beranda Djamojo"
          >
            <Image
              src="/images/brand/logo-djamojo.jpeg"
              alt="Djamojo by Djamoe Spirit"
              width={200}
              height={56}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Navigasi utama"
          >
            {navLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-2 text-sm transition-colors duration-300 ${
                    active
                      ? "font-bold text-djamojo-green-600"
                      : "font-medium text-djamojo-green-700/75 hover:text-djamojo-green-700"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-djamojo-green-600 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/return-bottle"
              className="hidden btn-primary sm:inline-flex"
            >
              Mulai Return
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-full p-2 text-djamojo-green-700 transition-transform duration-300 hover:scale-110 motion-reduce:hover:scale-100 md:hidden"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-30 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } transition-opacity duration-300`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-djamojo-green-700/40 backdrop-blur-sm"
          aria-label="Tutup menu"
        />
        {/* Drawer */}
        <nav
          className={`absolute right-0 top-20 h-[calc(100vh-5rem)] w-full max-w-sm overflow-y-auto bg-djamojo-earth-50 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Navigasi mobile"
        >
          <ul className="flex flex-col gap-1 p-6">
            {navLinks.map((link, idx) => {
              const active = isActiveLink(pathname, link.href);
              return (
                <li
                  key={link.href}
                  className="animate-fade-in-left"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between border-l-2 px-4 py-3 text-base transition-all duration-200 ${
                      active
                        ? "border-djamojo-green-600 font-bold text-djamojo-green-700"
                        : "border-transparent font-medium text-djamojo-green-700/85 hover:border-djamojo-green-300 hover:bg-djamojo-green-50/60"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-djamojo-green-600" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-6 pb-6">
            <Link
              href="/return-bottle"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Mulai Return
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
