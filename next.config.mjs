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
      // There is no products overview page; send visitors to the flagship product.
      {
        source: '/products',
        destination: '/products/weld-inspector',
        permanent: true,
      },
      {
        source: '/de/products',
        destination: '/de/products/weld-inspector',
        permanent: true,
      },
      // The AI Inspector was renamed to Assembly Inspector.
      {
        source: '/products/ai-inspector',
        destination: '/products/assembly-inspector',
        permanent: true,
      },
      {
        source: '/de/products/ai-inspector',
        destination: '/de/products/assembly-inspector',
        permanent: true,
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
      // URLs of the pre-2025 website that Google still crawls (Search Console: "Not found (404)").
      {
        source: '/en/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        // Keep /en/home exclusive to its homepage redirect, including in deployed routing.
        source: '/en/:path((?!home$).+)',
        destination: '/:path',
        permanent: true,
      },
      {
        source: '/produkte',
        destination: '/de/products/weld-inspector',
        permanent: true,
      },
      {
        source: '/de/produkte',
        destination: '/de/products/weld-inspector',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
