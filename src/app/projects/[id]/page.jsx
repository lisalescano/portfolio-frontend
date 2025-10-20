'use client'

import { useEffect, useState } from 'react'
import { api } from '../../components/api'
import AboutProject from '../../components/about-project'
import { useRouter } from 'next/navigation'
import TopBar from '../../components/topbar'

export default function ProjectDetailPage({ params }) {
  const { id } = params
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api.getProject(id).then(setProject).catch(e => setError(e.message || 'Error')).finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="p-6">Loading...</div>
  if (error) return <div className="p-6 text-red-700">{error}</div>
  if (!project) return <div className="p-6">Not found</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-brown-50 via-white to-brand-orange-50 pt-16">
      <TopBar />
      <div className="max-w-6xl mx-auto p-6 sm:p-8">
        <div className="mb-4">
          <button onClick={() => router.back()} className="rounded border px-3 py-1">Back</button>
        </div>
        <AboutProject project={project} />
      </div>
    </div>
  )
}
