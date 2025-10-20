// app/admin/login/page.js
import LoginForm from '../../components/LoginForm'

export default function AdminLogin() {
  const correctPassword = buenassoyeladmin321 || ''

  if (!correctPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-brand-brown-50 via-white to-brand-orange-50 flex items-center justify-center">
        <div className="text-red-700 text-center">
          <h1 className="text-xl font-bold">Error de configuración</h1>
          <p>NEXT_PUBLIC_ADMIN_PASSWORD no está configurado</p>
        </div>
      </div>
    )
  }

  return <LoginForm correctPassword={correctPassword} />
}