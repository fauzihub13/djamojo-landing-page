export interface ArticleFactbox {
  title: string;
  body: string;
}

export interface ArticleSection {
  heading: string;
  body: string[];
  callout?: string;
  list?: string[];
  factbox?: ArticleFactbox;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  sections: ArticleSection[];
  references: string[];
}

export const articleMengapaReturnBottle: Article = {
  slug: "mengapa-return-bottle",
  title: "Mengapa Return Bottle? Sains, Regulasi, dan Janji Kami kepada Bumi",
  excerpt:
    "Di balik setiap botol kaca yang kembali, ada keputusan ilmiah, regulasi negara, dan keyakinan bahwa UMKM bisa memimpin transisi sirkular.",
  publishedAt: "20 Juni 2026",
  readingTime: "8 menit",
  sections: [
    {
      heading: "1. Krisis Sampah Plastik: Fakta yang Tidak Bisa Diabaikan",
      body: [
        "Industri minuman kemasan siap minum (Ready-to-Drink) di Indonesia tumbuh sangat pesat. Namun, pertumbuhan ini membawa dampak: plastik kini menjadi kategori sampah terbesar kedua nasional menurut Sistem Informasi Pengelolaan Sampah Nasional (SIPSN) KLHK, didominasi oleh botol, kantong, dan segel sekali pakai yang membutuhkan ratusan tahun untuk terurai.",
        "Fenomena yang lebih halus namun kritis adalah green attitude-behavior gap. Survei nasional menunjukkan mayoritas konsumen Indonesia menyatakan kepedulian terhadap produk berkelanjutan, tetapi perilaku pembelian aktual sering kali berbanding terbalik. Dua hal menghambat: skeptisisme terhadap fungsi kemasan hijau, dan persepsi beban finansial karena harga produk ramah lingkungan yang dianggap lebih mahal."
      ],
      callout:
        "Pertumbuhan industri tidak boleh mengorbankan generasi yang akan menanggung limbahnya. Djamojo memilih botol kaca sejak hari pertama — bukan sebagai strategi pemasaran, melainkan sebagai keputusan etis sejak 2012."
    },
    {
      heading: "2. Regulasi Negara: Kewajiban, Bukan Pilihan",
      body: [
        "Pemerintah Indonesia melalui Peraturan Menteri Lingkungan Hidup dan Kehutanan (Permen LHK) Nomor P.75/MENLHK/SETJEN/KUM.1/10/2019 tentang Peta Jalan Pengurangan Sampah oleh Produsen, telah mengikat seluruh produsen—termasuk sektor UMKM—untuk mereduksi sampah dari produk dan/atau kemasan mereka melalui skema pendauran ulang maupun penarikan kembali untuk digunakan ulang (re-use).",
        "Secara global, langkah ini linear dengan Tujuan Pembangunan Berkelanjutan (SDGs) Agenda 2030, khususnya Poin 12 — Konsumsi dan Produksi yang Bertanggung Jawab. Target 12.5 menekankan pengurangan limbah secara substansial melalui prinsip 3R: Reduce, Reuse, Recycle."
      ]
    },
    {
      heading: "3. Sains di Balik Botol Kaca Sirkular",
      body: [
        "Riset daur hidup material menunjukkan bahwa botol kaca yang ditarik kembali, disterilisasi, dan digunakan ulang hingga 20 kali siklus hidup (lifespan) mampu memotong emisi gas rumah kaca hingga lebih dari 90% dibandingkan produksi botol baru atau penggunaan botol plastik sekali pakai (Gheewala, 2023).",
        "Angka ini bukan sekadar abstraksi akademik. Setiap siklus reuse mempertahankan nilai material yang telah diekstraksi dan diolah, sehingga mengurangi kebutuhan bahan baku baru dan menekan polusi hulu-hilir secara masif."
      ],
      factbox: {
        title: "−90% Emisi Gas Rumah Kaca",
        body: "Per siklus pakai ulang botol kaca food-grade yang disterilisasi sesuai standar industri (Gheewala, 2023)."
      }
    },
    {
      heading: "4. Pelajaran dari Kegagalan Program Sebelumnya",
      body: [
        "Djamojo bukanlah nama baru dalam konsep returnable packaging. Inisiatif pengembalian botol pernah dijalankan sebelumnya—namun mengalami kegagalan operasional. Akar masalahnya klasik: tidak adanya standarisasi sistem logistik balik dan panduan kerja yang terstruktur.",
        "Kini, Program Return Bottle direkonstruksi berbasis data empiris persepsi konsumen. Hasilnya adalah SOP yang menjawab empat hambatan utama: standardisasi proses, transparansi higienitas, efisiensi biaya kemasan, dan resistensi harga."
      ]
    },
    {
      heading: "5. Empat Tujuan Strategis yang Kami Tetapkan",
      body: ["Booklet SOP Sirkular Djamojo merumuskan empat tujuan strategis yang saling menopang:"],
      list: [
        "Membangun Keunggulan Kompetitif Berkelanjutan (Circular Competitive Advantage) — menjadikan kemasan sirkular sebagai Unique Selling Proposition.",
        "Meningkatkan Green Perceived Value (PVSP) & Perceived Eco-Friendliness (PEF) — memfasilitasi kebutuhan psikologis konsumen untuk berkontribusi pada pelestarian alam.",
        "Efisiensi Struktur Biaya Kemasan — menekan pengeluaran operasional jangka panjang untuk pembelian botol baru.",
        "Mengatasi Hambatan Finansial Konsumen (Price Consciousness) — skema insentif kreatif yang menetralkan resistensi harga."
      ]
    },
    {
      heading: "6. Komitmen Kami: Bukan Greenwashing",
      body: [
        "Djamojo tidak membebankan biaya lingkungan ke harga dasar produk. Sebagai gantinya, kami membangun sistem reward yang adil: konsumen mendapat manfaat ekonomi langsung ketika berpartisipasi dalam siklus sirkular.",
        "Transparansi adalah mata uang kami. Setiap tahap—dari sortir, dekontaminasi, sterilisasi autoclave 121°C, hingga refill—didokumentasikan secara terbuka di website ini. Anda tidak hanya mempercayai klaim; Anda dapat memverifikasinya."
      ],
      callout:
        "Kembali Berseri — botol yang kembali, bumi yang asri, tubuh yang sehat. Inilah janji sederhana kami: tidak ada瓶 plastik baru untuk satu botol yang masih bisa dipakai."
    }
  ],
  references: [
    "Sistem Informasi Pengelolaan Sampah Nasional (SIPSN) — Kementerian Lingkungan Hidup dan Kehutanan (KLHK) Republik Indonesia.",
    "Peraturan Menteri LHK No. P.75/MENLHK/SETJEN/KUM.1/10/2019 tentang Peta Jalan Pengurangan Sampah oleh Produsen.",
    "Gheewala, S. (2023). Life cycle assessment of glass bottle reuse systems.",
    "PBB (2015). Sustainable Development Goals — Poin 12, Target 12.5.",
    "Mita Tri Hapsari Jasmine (2026). Booklet Pedoman Strategis & SOP Manajemen Kemasan Ramah Lingkungan & Program Pengembalian Botol Kaca Djamojo. Politeknik Negeri Bandung."
  ]
};
