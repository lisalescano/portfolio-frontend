// next.config.mjs - AGREGAR esto
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // 🔥 LIMITAR TAMAÑO DE FUNCIONES
  experimental: {
      serverComponentsExternalPackages: [],
      largePageDataBytes: 128 * 1000, // 128KB máximo
  },
  
  // COMPRESIÓN AGGRESIVA
  compress: true,
  
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