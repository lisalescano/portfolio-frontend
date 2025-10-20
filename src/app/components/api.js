'use client'

const BASE_URL = 'https://portfolio-backend-jt7g.onrender.com'

async function http(path, { method = 'GET', body, headers } = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {})
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store'
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Request failed: ${res.status}`)
  }
  return res.json()
}

export const api = {
  // Projects
  listProjects: () => http('/projects'),
  getProject: (id) => http(`/projects/${id}`),
  createProject: (data) => http('/projects', { method: 'POST', body: data }),
  updateProject: (id, data) => http(`/projects/${id}`, { method: 'PUT', body: data }),
  deleteProject: (id) => http(`/projects/${id}`, { method: 'DELETE' }),
  linkTech: (projectId, technologyId) => http(`/projects/${projectId}/technologies/${technologyId}`, { method: 'POST' }),
  unlinkTech: (projectId, technologyId) => http(`/projects/${projectId}/technologies/${technologyId}`, { method: 'DELETE' }),

  // Technologies
  listTechs: () => http('/technologies'),
  getTech: (id) => http(`/technologies/${id}`),
  createTech: (data) => http('/technologies', { method: 'POST', body: data }),
  updateTech: (id, data) => http(`/technologies/${id}`, { method: 'PUT', body: data }),
  deleteTech: (id) => http(`/technologies/${id}`, { method: 'DELETE' }),
}
