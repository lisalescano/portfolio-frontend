// components/LoginForm.js
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm({ correctPassword }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (password === correctPassword) {
      // Guardar en cookies (para middleware) y sessionStorage (para client-side)
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()
      document.cookie = `adminAuthenticated=true; expires=${expires}; path=/`
      sessionStorage.setItem('adminAuthenticated', 'true')
      
      router.push('/admin')
    } else {
      setError('Contraseña incorrecta')
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-brown-50 via-white to-brand-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/70 border border-brand-brown-200 rounded-lg p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-brown-900">Admin Login</h1>
          <p className="text-brand-brown-700 mt-2">Ingresa la contraseña para acceder al panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-brown-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-brand-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-brown-500"
              placeholder="Ingresa la contraseña"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-brown-900 text-white py-2 px-4 rounded-md hover:bg-brand-brown-800 focus:outline-none focus:ring-2 focus:ring-brand-brown-500 disabled:opacity-50"
          >
            {loading ? 'Verificando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  )
}