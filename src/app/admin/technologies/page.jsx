'use client'

import { useEffect, useState } from 'react'
import { api } from '../../components/api'
import { useRouter } from 'next/navigation'

export default function AdminTechnologiesPage() {
  const router = useRouter()
  const [techs, setTechs] = useState([])
  const [editing, setEditing] = useState(null)
  const [name, setName] = useState('')
  const [level, setLevel] = useState(1)
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const load = async () => {
    try {
      const data = await api.listTechs()
      setTechs(data)
    } catch (e) {
      setError(e.message || 'Error loading technologies')
    }
  }

  useEffect(() => { load() }, [])

  const resetForm = () => { setEditing(null); setName(''); setLevel(1); setImage('') }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      if (editing) {
        await api.updateTech(editing.id, { name, level: Number(level), image })
      } else {
        await api.createTech({ name, level: Number(level), image })
      }
      await load(); resetForm()
    } catch (e) {
      setError(e.message || 'Error saving technology')
    } finally { setLoading(false) }
  }

  const onEdit = (t) => { setEditing(t); setName(t.name); setLevel(t.level); setImage(t.image) }
  const onDelete = async (id) => { if (confirm('Delete technology?')) { await api.deleteTech(id); await load(); } }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-brown-900">Technologies Admin</h1>
        <button onClick={() => router.push('/')} className="text-sm rounded bg-brand-orange-600 text-white px-3 py-2 hover:bg-brand-orange-500">Back</button>
      </div>

      <form onSubmit={onSubmit} className="bg-white/70 border border-brand-brown-200 rounded-lg p-4 space-y-3">
        <h3 className="font-semibold text-brand-brown-800">{editing ? 'Edit' : 'Create'} Technology</h3>
        {error && <div className="text-red-700 text-sm">{error}</div>}
        <div>
          <label className="block text-sm text-brand-brown-700">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} className="w-full rounded border px-3 py-2 text-brand-brown-900 placeholder-brand-brown-500 bg-white" placeholder="Technology name" required />
        </div>
        <div>
          <label className="block text-sm text-brand-brown-700">Level (1-5)</label>
          <input type="number" min={1} max={5} value={level} onChange={e => setLevel(e.target.value)} className="w-full rounded border px-3 py-2 text-brand-brown-900 bg-white" required />
        </div>
        <div>
          <label className="block text-sm text-brand-brown-700">Image URL</label>
          <input value={image} onChange={e => setImage(e.target.value)} className="w-full rounded border px-3 py-2 text-brand-brown-900 placeholder-brand-brown-500 bg-white" placeholder="https://..." required />
        </div>
        <div className="flex justify-end gap-2">
          {editing && <button type="button" onClick={resetForm} className="rounded border px-4 py-2">Cancel</button>}
          <button disabled={loading} className="rounded bg-brand-green-700 text-white px-4 py-2 hover:bg-brand-green-600 disabled:opacity-50">{loading ? 'Saving...' : 'Save'}</button>
        </div>
      </form>

      <div className="bg-white/70 border border-brand-brown-200 rounded-lg p-4">
        <h3 className="font-semibold text-brand-brown-800 mb-3">All Technologies</h3>
        <ul className="divide-y">
          {techs.map(t => (
            <li key={t.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium text-brand-brown-900">{t.name}</div>
                <div className="text-sm text-brand-brown-700">Level: {t.level}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => onEdit(t)} className="text-sm rounded border px-3 py-1 bg-brand-brown-500 text-white">Edit</button>
                <button onClick={() => onDelete(t.id)} className="text-sm rounded bg-red-600 text-white px-3 py-1 hover:bg-red-500">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
