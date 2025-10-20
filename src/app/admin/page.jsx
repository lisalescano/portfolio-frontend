// app/admin/page.js - MANTÉN ESTE ARCHIVO
'use client'

import { useEffect, useState } from 'react'
import { api } from '../components/api'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = async () => {
    try {
      const data = await api.listProjects()
      setProjects(data)
    } catch (e) { 
      setError(e.message || 'Error loading') 
    }
    finally { 
      setLoading(false) 
    }
  }

  useEffect(() => { 
    load() 
  }, [])

  const del = async (id) => {
    if (!confirm('Delete project?')) return
    await api.deleteProject(id)
    await load()
  }
  
  const handleLogout = () => {
    sessionStorage.removeItem('adminLoggedIn')
    window.location.href = '/admin'  // Esto recargará y pedirá login again
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-brown-50 via-white to-brand-orange-50 pt-16">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-brand-brown-900">Admin</h1>
          <div className="flex gap-2">
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2">Cerrar Sesión</button>
            <button onClick={() => router.push('/admin/technologies')} className="rounded border px-3 py-2 bg-brand-brown-900 text-white">Manage Technologies</button>
            <button onClick={() => router.push('/admin/projects/new')} className="rounded bg-brand-green-700 text-white px-3 py-2 hover:bg-brand-green-600">New Project</button>
          </div>
        </div>

        {error && <div className="text-red-700">{error}</div>}

        <div className="bg-white/70 border border-brand-brown-200 rounded-lg p-4">
          <h2 className="font-semibold text-brand-brown-900 mb-3">Projects</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className="divide-y">
              {projects.map(p => (
                <li key={p.id} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-brand-brown-900">{p.title}</div>
                    <div className="text-sm text-brand-brown-700">{p.role}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => router.push(`/projects/${p.id}`)} className="text-sm rounded border px-3 py-1 bg-brand-brown-900 text-white">View</button>
                    <button onClick={() => router.push(`/admin/projects/${p.id}`)} className="text-sm rounded border px-3 py-1 bg-brand-brown-900 text-white">Edit</button>
                    <button onClick={() => del(p.id)} className="text-sm rounded bg-red-600 text-white px-3 py-1 hover:bg-red-500">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}