/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/products/weld-seam-scanner',
        destination: '/products/weld-inspector',
        permanent: true, // 301 redirect
      },
      {
        source: '/de/products/weld-seam-scanner',
        destination: '/de/products/weld-inspector',
        permanent: true, // 301 redirect
      },
      // /de/kontakt was a byte-identical duplicate of /de/contact (orphaned, no internal links).
      {
        source: '/de/kontakt',
        destination: '/de/contact',
        permanent: true,
      },
      {
        source: '/de/kontakt/danke',
        destination: '/de/contact/thank-you',
        permanent: true,
      },
      // Legacy placeholder pages removed; keep old URLs alive for Google and any external links.
      {
        source: '/solutions/automotive',
        destination: '/products/weld-inspector',
        permanent: true,
      },
      {
        source: '/solutions/manufacturing',
        destination: '/products/assembly-inspector',
        permanent: true,
      },
      {
        source: '/solutions/:slug*',
        destination: '/use-cases',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
