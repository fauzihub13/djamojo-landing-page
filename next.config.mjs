/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // View Transitions API di-handle via CSS di globals.css (::view-transition-*)
  // Bekerja cross-browser untuk navigasi internal Next.js App Router
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "via.placeholder.com" }
    ]
  }
};

export default nextConfig;
