// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // ← QUITA esta línea
  // trailingSlash: true, // ← QUITA esta línea
  // images: {
  //   unoptimized: true // ← QUITA esta línea
  // },
  
  output: 'standalone', // ← MANTÉN esta línea
  
  // Configuración para evitar errores
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