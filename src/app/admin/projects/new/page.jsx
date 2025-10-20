'use client'

import ProjectForm from '../../../components/project-form'
import { useRouter } from 'next/navigation'

export default function NewProjectPage() {
  const router = useRouter()
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-brown-900">Create Project</h1>
        <button onClick={() => router.push('/')} className="text-sm rounded bg-brand-orange-600 text-white px-3 py-2 hover:bg-brand-orange-500">Back</button>
      </div>
      <ProjectForm onCreated={() => router.push('/')} />
    </div>
  )
}
