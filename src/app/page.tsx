'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import { useEffect, useState } from "react"

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            setShowTopBtn(true)
        } else {
            setShowTopBtn(false)
        }
    })
  }, [])

  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <main>
      {showTopBtn && <button onClick={handleGoTop} type="button" className="fixed bottom-10 right-10 z-10 text-white bg-gray-700 hover:bg-gray-950 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2">
        <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
        <span className="sr-only">Icon description</span>
      </button>}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
