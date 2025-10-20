'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Card({ project }) {
    const router = useRouter()
    const role = project?.role || 'Role'
    const title = project?.title || 'Project'
    const description = project?.description || ''
    const image = project?.image || 'electroemporium.png'
    const goToDetail = () => router.push(`/projects/${project?.id}`)
    return (
        <button onClick={goToDetail} className="group relative block bg-black w-64 h-80 text-left">
            <Image
                alt={title}
                src={image}
                width={256}
                height={320}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-2 sm:p-3 lg:p-4 h-full">
                {/* Top tech icons */}
                <div className="absolute top-2 left-2 right-2 flex items-center gap-2 transition-opacity duration-200 group-hover:opacity-0">
                    {(project?.Technologies || []).slice(0,6).map(t => (
                        <Image 
                            key={t.id} 
                            src={t.image} 
                            alt={t.name} 
                            title={t.name} 
                            width={20}
                            height={20}
                            className="h-5 w-5 rounded border border-white/40 object-cover bg-white" 
                        />
                    ))}
                </div>

                {/* Bottom role/title and hover description */}
                <div className="absolute bottom-2 left-4 right-2">
                    <div className="transition-transform duration-200 group-hover:-translate-y-[170px]">
                        <p className="text-xs font-medium uppercase tracking-widest text-brand-orange-500">{role}</p>
                        <p className="text-sm font-bold text-white sm:text-base">{title}</p>
                    </div>
                    <div className="mt-1 translate-y-2 transform opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-[11px] text-white/90 line-clamp-4 rounded py-1">{description}</p>
                    </div>
                </div>
            </div>
        </button>
    )
}