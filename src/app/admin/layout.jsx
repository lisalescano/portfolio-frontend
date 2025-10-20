'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function AdminLayout({ children }) {
  const [showLogin, setShowLogin] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true'
    
    if (!isLoggedIn) {
      setShowLogin(true)
    }
  }, [])

  const handleLogin = (password) => {
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    
    if (password === correctPassword) {
      sessionStorage.setItem('adminLoggedIn', 'true')
      setShowLogin(false)
      router.refresh()
    } else {
      alert('Contraseña incorrecta')
    }
  }

  if (showLogin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl mb-4">Ingresar al Admin</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            const password = e.target.password.value
            handleLogin(password)
          }}>
            <input 
              type="password" 
              name="password"
              placeholder="Contraseña" 
              className="border p-2 w-full mb-4"
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  return children
}