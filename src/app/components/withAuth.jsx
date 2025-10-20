// components/withAuth.js
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from './LoginForm'

export default function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const router = useRouter()
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ''

    const getCookie = (name) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
      return null
    }

    useEffect(() => {
      // Verificar tanto sessionStorage como cookies
      const sessionAuth = sessionStorage.getItem('adminAuthenticated') === 'true'
      const cookieAuth = getCookie('adminAuthenticated') === 'true'
      const isAuth = sessionAuth || cookieAuth
      
      setIsAuthenticated(isAuth)
      
      // Si no está autenticado, redirigir al login
      if (!isAuth && correctPassword) {
        router.push('/admin/login')
      }
    }, [router, correctPassword])

    if (isAuthenticated === null) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-brand-brown-50 via-white to-brand-orange-50 flex items-center justify-center">
          <div className="text-brand-brown-900">Cargando...</div>
        </div>
      )
    }

    if (!isAuthenticated) {
      return <LoginForm correctPassword={correctPassword} />
    }

    return <WrappedComponent {...props} />
  }
}