'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function TopBar() {
  const pathname = usePathname()
  const router = useRouter()
  
  const handleNavigation = (e, hash) => {
    e.preventDefault()
    
    // Si ya estamos en la página principal
    if (pathname === '/') {
      // Hacer scroll suave al elemento
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // Si estamos en otra página, navegar a la principal con el hash
      router.push(`/${hash}`)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-brand-orange-800 text-white border-b border-brand-brown-900/60 shadow-lg shadow-brand-brown-900/40">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded-full bg-brand-green-600/40 grid place-items-center font-bold">LL</div>
          <span className="hidden sm:inline font-semibold tracking-wide">Lisandro Lescano</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
          <a 
            href="/#home" 
            onClick={(e) => handleNavigation(e, '#home')}
            className="hover:text-brand-green-300"
          >
            Home
          </a>
          <a 
            href="/#projects" 
            onClick={(e) => handleNavigation(e, '#projects')}
            className="hover:text-brand-green-300"
          >
            Projects
          </a>
          <a 
            href="/#skills" 
            onClick={(e) => handleNavigation(e, '#skills')}
            className="hover:text-brand-green-300"
          >
            Skills
          </a>
          <a 
            href="/#about" 
            onClick={(e) => handleNavigation(e, '#about')}
            className="hover:text-brand-green-300"
          >
            About
          </a>
        </nav>
        <a href="CV_Lisandro_Ingles.pdf" download="Lisandro-Resume" className="inline-flex items-center gap-2 rounded bg-brand-orange-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-brand-orange-500 hover:shadow-lg hover:shadow-brand-orange-500/40 active:scale-100 ring-1 ring-brand-brown-900/30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Resume
        </a>
      </div>
    </header>
  )
}