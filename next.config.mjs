// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // 🔥 IMPORTANTE: Deshabilitar cache de build innecesaria
  experimental: {
    // Esto ayuda a reducir cache
    optimizeCss: true,
    serverComponentsExternalPackages: [],
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },
}

export default nextConfig