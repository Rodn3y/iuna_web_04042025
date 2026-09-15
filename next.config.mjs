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
    ]
  },
}

export default nextConfig
