/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    },
    experimental: {
      serverComponentsExternalPackages: [], // Limpia paquetes externos
  },
    // Otras configuraciones que puedas tener...
  }
  
  export default nextConfig