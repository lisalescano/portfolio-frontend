// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← Exportación estática
  trailingSlash: true,
  images: {
      unoptimized: true
  },
  env: {
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },
}

export default nextConfig