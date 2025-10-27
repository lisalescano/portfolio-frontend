'use client'

export default function AboutProject({ project, onClose }) {
  if (!project) return null
  const techs = project.Technologies || []
  return (
    <div className="bg-white/80 border border-brand-brown-200 rounded-xl p-8 shadow">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-brown-900">{project.title}</h1>
          <p className="text-sm text-brand-brown-700 mt-1">{project.role}</p>
          {techs.length > 0 && (
            <div className="mt-2 flex items-center gap-2">
              {techs.map(t => (
                <img key={t.id} src={t.image} alt={t.name} title={t.name}
                  className="h-6 w-6 rounded border border-brand-brown-200 object-cover bg-white" />
              ))}
            </div>
          )}
        </div>
        {onClose && (
          <button onClick={onClose} className="rounded border px-3 py-1">Close</button>
        )}
      </div>

      <div className="mt-6">
        <img src={project.image} alt={project.title} className="rounded-lg w-full h-72 sm:h-96 object-cover shadow" />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3">
          <h2 className="text-xl font-semibold text-brand-brown-900 mb-3"></h2>
          <p className="text-brand-brown-800 leading-7 text-base whitespace-pre-wrap">{project.description}</p>
        </div>
      </div>
    </div>
  )
}