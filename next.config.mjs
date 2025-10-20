// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sin output, sin experimental, solo lo básico
  env: {
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },
}

export default nextConfig