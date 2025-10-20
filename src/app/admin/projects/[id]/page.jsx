'use client'

import { useEffect, useState } from 'react'
import { api } from '../../../components/api'
import { useRouter } from 'next/navigation'

export default function EditProjectPage({ params }) {
  const router = useRouter()
  const { id } = params
  const [project, setProject] = useState(null)
  const [title, setTitle] = useState('')
  const [role, setRole] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [techs, setTechs] = useState([])
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const [p, t] = await Promise.all([api.getProject(id), api.listTechs()])
        setProject(p)
        setTitle(p.title); setRole(p.role); setDescription(p.description); setImage(p.image)
        setTechs(t)
        setSelected((p.Technologies || []).map(x => x.id))
      } catch (e) { setError(e.message || 'Error loading project') }
      finally { setLoading(false) }
    }
    load()
  }, [id])

  const toggleTech = (tid) => setSelected(prev => prev.includes(tid) ? prev.filter(x => x !== tid) : [...prev, tid])

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await api.updateProject(id, { title, role, description, image, technologies: selected })
      router.push('/')
    } catch (e) { setError(e.message || 'Error updating project') }
  }

  if (loading) return <div className="p-6">Loading...</div>
  if (error) return <div className="p-6 text-red-700">{error}</div>

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-brown-900">Edit Project</h1>
        <button onClick={() => router.push('/')} className="text-sm rounded bg-brand-orange-600 text-white px-3 py-2 hover:bg-brand-orange-500">Back</button>
      </div>

      <form onSubmit={onSubmit} className="bg-white/70 border border-brand-brown-200 rounded-lg p-4 space-y-3">
        {error && <div className="text-red-700 text-sm">{error}</div>}
        <div>
          <label className="block text-sm text-brand-brown-700">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="w-full rounded border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-brand-brown-700">Role</label>
          <input value={role} onChange={e => setRole(e.target.value)} className="w-full rounded border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-brand-brown-700">Image URL</label>
          <input value={image} onChange={e => setImage(e.target.value)} className="w-full rounded border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-brand-brown-700">Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full rounded border px-3 py-2" rows={3} required />
        </div>
        <div>
          <label className="block text-sm text-brand-brown-700 mb-1">Technologies</label>
          <div className="flex flex-wrap gap-2">
            {techs.map(t => (
              <button type="button" key={t.id} onClick={() => toggleTech(t.id)}
                className={`px-3 py-1 rounded border ${selected.includes(t.id) ? 'bg-brand-green-600 text-white border-brand-green-700' : 'bg-white text-brand-brown-800 border-brand-brown-300'}`}>
                {t.name} ({t.level})
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="rounded bg-brand-green-700 text-white px-4 py-2 hover:bg-brand-green-600">Save</button>
        </div>
      </form>
    </div>
  )
}
