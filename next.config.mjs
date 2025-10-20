// next.config.mjs - Agrega esto
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },
  // Limitar tamaño de funciones
  experimental: {
      serverComponentsExternalPackages: [],
  },
  // Forzar standalone si el problema es de tamaño
  output: 'standalone', // ← PRUEBA ESTO
}

export default nextConfig