'use client'

import TopBar from './components/topbar'
import { } from 'react'
import SkillsList from './components/skills-list'
import Cards from './components/cards'

export default function App() {
  return (
    <main className="scroll-smooth">
      <TopBar />
      <div id="home" className="min-h-screen bg-gradient-to-b from-brand-brown-50 via-white to-brand-orange-50 pt-16">
        <section className="px-6 sm:px-10 pb-10 scroll-mt-14" id="home">
          <h1 className="font-bold text-center text-brand-green-800 text-6xl sm:text-7xl font-mono">
            Hello World!
          </h1>
          <h3 className="mt-6 text-black max-w-2xl mx-auto text-brand-green-800 font-mono font-bold text-center">
            Welcome to my portfolio! My name is Lisandro Lescano, I am a 22 years old passionate programmer.
            I invite you to explore my work, where each project reflects my dedication to learning, innovation, and creativity.
            Whether it&apos;s a complex application or a simple design, I hope you&apos;ll find something that resonates with you.
            Thank you for stopping by, and I hope you enjoy your time here!
          </h3>
        </section>

        <section id="projects" className="px-6 sm:px-10 py-10 scroll-mt-14">
        <h2 className="pb-3 font-bold text-center text-brand-green-600 text-3xl font-mono">Projects</h2>
          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            <Cards />
          </div>
        </section>

        <section id="skills" className="px-6 sm:px-10 py-10 scroll-mt-14">
          <h2 className="pb-3 font-bold text-center text-brand-brown-800 text-3xl font-mono">Skills</h2>
          <SkillsList />
        </section>

        <section id="about" className="px-6 sm:px-10 py-10 scroll-mt-14">
          <h2 className="pb-3 font-bold text-center text-brand-orange-800 text-3xl font-mono">About me</h2>
          <p className="text-center text-brand-brown-700 max-w-2xl mx-auto mb-8">
          I build things that work (most of the time). When I&apos;m not coding, I&apos;m probably playing videogames or questioning my life choices 😁.
           Passionately curious!
          </p>
          
          {/* Enlaces a redes sociales */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://linkedin.com/in/lisandro-lescano-566852220/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-mono"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="https://github.com/lisalescano" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-sm hover:bg-gray-900 transition-colors font-mono"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>

          {/* Información de contacto */}
          <div className="text-center text-brand-brown-600 font-mono">
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <a 
                href="mailto:lisalescano10@gmail.com"
                className="hover:text-brand-orange-600 transition-colors"
              >
                ✉️ lisalescano10@gmail.com
              </a>
              <a 
                href="tel:+543855379314"
                className="hover:text-brand-orange-600 transition-colors"
              >
                📞 +54 (385) 537-9314
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}