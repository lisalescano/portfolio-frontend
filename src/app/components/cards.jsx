'use client'

import { useEffect, useState } from "react"
import Card from "./card"
import { api } from "./api"

export default function Cards() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        api.listProjects()
            .then(projects => {
                // Ordenar por ID descendente: más reciente primero (mayor ID = más reciente)
                const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
                setProjects(sortedProjects);
            })
            .catch(err => setError(err.message || 'Error loading projects'))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <div className="p-4 text-brand-brown-800">Loading projects...</div>
    if (error) return <div className="p-4 text-red-700">{error}</div>

    return (
        <div className="flex-1 p-4">
            {projects.length === 0 && (
                <div className="text-brand-brown-700">No projects yet.</div>
            )}
            
            {/* Contenedor con scroll horizontal */}
            <div className="overflow-x-auto">
                <div className="flex gap-4 pb-4 min-w-min">
                    {projects.map(p => (
                        <div key={p.id} className="flex-shrink-0 w-70">
                            <Card project={p} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}  