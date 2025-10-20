'use client'

import { useEffect, useState } from 'react'
import { api } from './api'

export default function ProjectForm({ onCreated }) {
  const [title, setTitle] = useState('')
  const [role, setRole] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [techs, setTechs] = useState([])
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    api.listTechs().then(setTechs).catch(e => setError(e.message || 'Error loading technologies'))
  }, [])

  const toggleTech = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id])
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await api.createProject({ title, role, description, image, technologies: selected })
      setTitle(''); setRole(''); setDescription(''); setImage(''); setSelected([])
      onCreated && onCreated()
    } catch (e) {
      setError(e.message || 'Error creating project')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-white/70 border border-brand-brown-200 rounded-lg p-4 space-y-3">
      <h3 className="font-bold text-brand-brown-900">Create Project</h3>
      {error && <div className="text-red-700 text-sm">{error}</div>}
      <div>
        <label className="block text-sm text-brand-brown-700">Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} className="w-full rounded border px-3 py-2 text-brand-brown-900 placeholder-brand-brown-500 bg-white" placeholder="Project title" required />
      </div>
      <div>
        <label className="block text-sm text-brand-brown-700">Role</label>
        <input value={role} onChange={e => setRole(e.target.value)} className="w-full rounded border px-3 py-2 text-brand-brown-900 placeholder-brand-brown-500 bg-white" placeholder="Your role" required />
      </div>
      <div>
        <label className="block text-sm text-brand-brown-700">Image URL</label>
        <input value={image} onChange={e => setImage(e.target.value)} className="w-full rounded border px-3 py-2 text-brand-brown-900 placeholder-brand-brown-500 bg-white" placeholder="https://..." required />
      </div>
      <div>
        <label className="block text-sm text-brand-brown-700">Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full rounded border px-3 py-2 text-brand-brown-900 placeholder-brand-brown-500 bg-white" placeholder="Description" rows={3} required />
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
        <button disabled={loading} className="rounded bg-brand-orange-600 text-white px-4 py-2 hover:bg-brand-orange-500 disabled:opacity-50">{loading ? 'Creating...' : 'Create'}</button>
      </div>
    </form>
  )
}
