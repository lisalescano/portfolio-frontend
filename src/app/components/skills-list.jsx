'use client'

import { useEffect, useState } from 'react'
import { api } from './api'

function Stars({ level }) {
  const full = Math.max(0, Math.min(5, Number(level) || 0))
  return (
    <div className="inline-flex gap-0.5 align-middle">
      {[1,2,3,4,5].map(n => (
        <svg key={n} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`h-4 w-4 ${n <= full ? 'fill-brand-orange-500' : 'fill-brand-brown-200'}`}>
          <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.205 3.59a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L7.196 20.527a.562.562 0 0 1-.84-.61l1.285-5.386a.563.563 0 0 0-.182-.557l-4.205-3.59a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ))}
    </div>
  )
}

export default function SkillsList() {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api.listTechs()
      .then(list => setTechs(list.sort((a,b) => b.level - a.level)))
      .catch(e => setError(e.message || 'Error'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-brand-brown-800">Loading skills...</div>
  if (error) return <div className="text-red-700">{error}</div>

  return (
    <div className="max-w-3xl mx-auto bg-white/70 border border-brand-brown-200 rounded-lg p-4">
      {/* Contenedor con altura fija y scroll nativo */}
      <div className="max-h-64 overflow-y-auto"> {/* Altura para ~5 items */}
        <ul className="divide-y">
          {techs.map(t => (
            <li key={t.id} className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="h-6 w-6 rounded border border-brand-brown-200 object-cover" />
                <span className="text-brand-brown-900 font-medium">{t.name}</span>
              </div>
              <Stars level={t.level} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}