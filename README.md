# Djamojo by Djamoe Spirit — Landing Page

Website resmi **Djamojo by Djamoe Spirit** — pionir jamu tradisional homemade
siap minum dalam botol kaca dari Kota Bandung. Dibangun dengan fokus pada
**branding emosional** dan **transparansi informatif-akademik**, termasuk
dokumentasi lengkap Program Return Bottle yang bersertifikat food-grade.

> **Brand Identity** bersumber dari:
> - *Booklet Pedoman Strategis & SOP Return Bottle Djamojo* (Politeknik Negeri Bandung, 2026)
> - *Design Guideline Landing Page Return Bottle Program for Djamojo by Djamoe Spirit* (brand colors, fonts, locations)
> - Lihat juga: [`PRD_Website_Djamojo.md`](./PRD_Website_Djamojo.md)

---

## Brand Identity (sumber resmi)

### Palet Warna (8 warna dari Design Guideline)

| Token | Hex | Penggunaan |
|---|---|---|
| `--brand-yellow` | `#fede1a` | Kunyit — aksen utama, CTA pill |
| `--brand-cream` | `#fdf5a2` | Kuning muda — background hero, label |
| `--brand-olive` | `#626f27` | Hijau olive — primary brand color |
| `--brand-gray` | `#858585` | Abu netral — secondary text |
| `--brand-tan` | `#b3a495` | Coklat muda — light wood |
| `--brand-brown` | `#746555` | Coklat sedang — body earth |
| `--brand-wood` | `#ad7841` | Coklat oranye — premium accent |
| `--brand-coffee` | `#542f18` | Coklat tua — heading, premium series |

Diimplementasikan sebagai Tailwind tokens di `tailwind.config.ts`:
- `djamojo-green-50..700` (olive family)
- `djamojo-turmeric-50..700` (yellow/cream family)
- `djamojo-earth-50..700` (brown/wood family)

### Font

- **Heading serif:** `Playfair Display` (substitusi: Sergio Trendy — lisensi Google Fonts)
- **Body sans:** `Inter` (substitusi: Helvetica World — lisensi Google Fonts)

Font saat ini di-keep karena kesamaan karakter (serif modern untuk heading,
clean sans untuk body) dan tidak mengurangi konsistensi brand.

### Kontak & Lokasi (dari Design Guideline)

- **Instagram:** `@djamojo`
- **WhatsApp:** `+62 xxx` (lihat `siteConfig.contact.whatsapp`)
- **LinkedIn:** `Djamojo by Djamoe Spirit`
- **Email:** `halo@djamojo.id`

### Drop Point Resmi (4 lokasi di Bandung)

| Lokasi | Alamat |
|---|---|
| Kozi Budara | Jl. Bukit Dago Utara No. 28 |
| Kozi Dipatiukur | Jl. Dipati Ukur No. 1 |
| Kozi Malaka | Jl. Halimun No. 36 *(Inside Malaka Hotel)* |
| Kamaniya Atelier | Dago 169 |

---

## Stack Teknologi

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS 3.4 (palet kustom `djamojo-*` sesuai brand)
- **Font:** Inter (sans) + Playfair Display (serif) via `next/font`
- **Ikon:** lucide-react
- **Aset:** Logo & foto brand (JPEG) + SVG ilustrasi pendukung
- **Animasi:** CSS keyframes + View Transitions + IntersectionObserver
- **Deployment-ready:** Vercel / platform Next.js apapun

## Sistem Animasi

| Tipe | Implementasi | Dipakai di |
|---|---|---|
| **Page transitions** | `experimental.viewTransition: true` + `::view-transition-*` | Semua navigasi |
| **Scroll reveal** | `RevealOnScroll` component + `IntersectionObserver` | Semua section dengan cards |
| **Entrance staggered** | `animate-fade-in-up/down/left/right` + `delay-100..800` | Hero, USP, stats |
| **Hover micro-interactions** | `hover:-translate-y-X` + `hover:scale-X` + `transition-all duration-300/500/700` | Cards, buttons, icons |
| **Floating elements** | `animate-float` | Hero stat callout |
| **Pulse attention** | `animate-ping` | WhatsApp button |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` | Override semua animasi |

### Keyframes tersedia

```css
animate-fade-in          // 600ms ease-out
animate-fade-in-up       // 700ms cubic-bezier(0.16, 1, 0.3, 1) — staggered entrance
animate-fade-in-down     // entrance dari atas
animate-fade-in-left     // entrance dari kiri
animate-fade-in-right    // entrance dari kanan
animate-scale-in         // 600ms cubic-bezier
animate-float            // 3s infinite, ±8px
animate-pulse-soft       // 2s infinite
animate-spin-slow        // 20s linear infinite
```

### Pattern penggunaan

```tsx
import { RevealOnScroll } from "@/components/RevealOnScroll";

// Stagger reveal saat scroll
{items.map((item, i) => (
  <RevealOnScroll key={item.id} delay={i * 100}>
    <Card>{item.title}</Card>
  </RevealOnScroll>
))}

// Instant entrance (hero, above-the-fold)
<h1 className="animate-fade-in-up delay-200">Judul</h1>
<p className="animate-fade-in-up delay-300">Deskripsi</p>
```

## Struktur Folder

```
djamojo-landing-page/
├── PRD_Website_Djamojo.md       # Dokumen PRD lengkap
├── README.md
├── package.json
├── next.config.mjs              # viewTransition: true
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── logo-djamojo.svg
│       ├── logo-mark.svg
│       ├── hero-bottle.svg
│       ├── cycle-stages.svg
│       ├── infographic-alur.svg
│       ├── infographic-sanitasi.svg
│       ├── infographic-emisi.svg
│       ├── og-image.svg          # Default OG
│       ├── products/             # 6 botol per varian
│       │   ├── kunyit-asem.svg
│       │   ├── beras-kencur.svg
│       │   ├── jahe-merah.svg
│       │   ├── temulawak.svg
│       │   ├── sirih-merah.svg
│       │   └── kencur-madu.svg
│       ├── proses/               # 5 langkah behind-the-scenes
│       │   ├── 01-bahan-baku.svg
│       │   ├── 02-memasak.svg
│       │   ├── 03-pengisian.svg
│       │   ├── 04-penyegelan.svg
│       │   └── 05-qc.svg
│       └── og/                   # OG image per halaman
│           ├── og-brand.svg
│           ├── og-produk.svg
│           ├── og-return-bottle.svg
│           ├── og-edukasi.svg
│           └── og-kontak.svg
└── src/
    ├── app/                      # 11 halaman + layout
    ├── components/               # 6 komponen (Navbar, Footer, dll + Reveal helpers)
    ├── content/                  # Artikel pilar (typed)
    └── lib/                      # site, products, useReveal, og-helper
```

## Aset Visual Lengkap

### Logo & Identitas Brand (dari `djamojo images.zip`)
- `public/images/brand/logo-djamojo.jpeg` — Logo resmi Djamojo (Navbar + Footer)
- `public/images/brand/product-portrait.jpeg` — Foto produk hero (720×1080)
- `public/images/brand/bottle-shot.jpeg` — Foto botol artikel pilar (960×1280)
- `public/images/brand/lifestyle-wide.jpeg` — Foto behind-the-scenes /brand (1600×1200)

### Hero & Onboarding
- `public/images/hero-bottle.svg` — Ilustrasi hero alternatif (vector)
- `public/images/cycle-stages.svg` — 4 tahap siklus (Sortir, Sanitasi, QC, Refill)

### Infografis Brand
- `public/images/infographic-alur.svg` — 4 langkah return bottle
- `public/images/infographic-sanitasi.svg` — 4 tahap + parameter food-grade
- `public/images/infographic-emisi.svg` — Perbandingan emisi −90%

### Produk (6 varian botol — SVG ilustratif)
- `public/images/products/kunyit-asem.svg` (Klasik · kunyit)
- `public/images/products/beras-kencur.svg` (Klasik · putih keruh)
- `public/images/products/jahe-merah.svg` (Klasik · merah pekat)
- `public/images/products/temulawak.svg` (Premium · tutup emas)
- `public/images/products/sirih-merah.svg` (Premium · marun)
- `public/images/products/kencur-madu.svg` (Edisi Khusus · limited ribbon)

### Behind-the-Scenes (5 langkah)
- `public/images/proses/01-bahan-baku.svg` — Pemilihan kunyit/jahe/kencur/temulawak
- `public/images/proses/02-memasak.svg` — Pemasakan di tungku kayu
- `public/images/proses/03-pengisian.svg` — Lini pengisian higienis
- `public/images/proses/04-penyegelan.svg` — Penyegelan tutup & label
- `public/images/proses/05-qc.svg` — Inspeksi QC 100% dengan UV-C

### Open Graph (5 halaman + 1 default) — palet brand-aligned
- `public/images/og-image.svg` — Default (home) — olive + kunyit
- `public/images/og/og-brand.svg` — /brand
- `public/images/og/og-produk.svg` — /produk
- `public/images/og/og-return-bottle.svg` — /return-bottle
- `public/images/og/og-edukasi.svg` — /edukasi
- `public/images/og/og-kontak.svg` — /kontak

## Cara Menjalankan

### Prasyarat
- Node.js ≥ 18.17 (disarankan 20 LTS)
- npm / pnpm / yarn

### Instalasi
```bash
cd /Users/fauzi/PROJECT/REACT/djamojo-landing-page
npm install
```

### Development server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000)

### Build untuk produksi
```bash
npm run build
npm start
```

### Lint & typecheck
```bash
npm run lint
npm run typecheck
```

## Halaman Tersedia

| Path | Deskripsi |
|---|---|
| `/` | Hero, USP, stats, teaser return bottle, CTA |
| `/brand` | Cerita Djamojo, nilai, dan timeline |
| `/produk` | Katalog 6 varian jamu (data statis, siap diintegrasikan CMS) |
| `/return-bottle` | Overview program + 4 tujuan strategis |
| `/return-bottle/kenapa` | **Artikel pilar pertama** (8 menit baca) |
| `/return-bottle/alur` | 4 langkah alur pengembalian |
| `/return-bottle/sanitasi` | SOP 4 tahap + parameter food-grade |
| `/return-bottle/distribusi` | EFP Structure (4 pilar proteksi) |
| `/return-bottle/insentif` | Cash-back & Green Points |
| `/edukasi` | Hub konten akademis (4 topik + referensi) |
| `/kontak` | WhatsApp, email, IG, drop point, kemitraan B2B |

## Sumber Konten

Seluruh konten Program Return Bottle, termasuk artikel pilar "Mengapa Return
Bottle?", disusun dari booklet:
> *Mita Tri Hapsari Jasmine (2026). Booklet Pedoman Strategis & SOP
> Manajemen Kemasan Ramah Lingkungan & Program Pengembalian Botol Kaca
> Djamojo. Politeknik Negeri Bandung.*

## Roadmap Lanjutan (sesuai PRD)

- [ ] Integrasi CMS (Sanity.io / Strapi) untuk artikel & produk dinamis
- [ ] Drop Point Map dengan Leaflet + OpenStreetMap
- [ ] Dashboard Green Points (autentikasi + database)
- [ ] Newsletter integration
- [ ] Versi multibahasa (id / en)
- [ ] Bundle formulir kontak dengan validasi
- [ ] Lighthouse ≥ 95 (Performance, A11y, SEO)

## Lisensi

© Djamojo by Djamoe Spirit. Konten edukatif dapat dikutip dengan atribusi.
