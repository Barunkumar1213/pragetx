import React from 'react'

const Caret = () => (
  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Header(){
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur">
      <div className="container-max flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3">
          <img src="/assets/logo1.png" alt="PragetX" className="h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a className="nav-link flex items-center gap-1" href="#"><span>Company</span><Caret/></a>
          <a className="nav-link flex items-center gap-1" href="#"><span>Products</span><Caret/></a>
          <a className="nav-link flex items-center gap-1" href="#"><span>Services</span><Caret/></a>
          <a className="nav-link flex items-center gap-1" href="#"><span>Resources</span><Caret/></a>
          <a className="nav-link flex items-center gap-1" href="#"><span>Industries</span><Caret/></a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden sm:inline-flex">Get In Touch</a>
        </div>
      </div>
    </header>
  )
}
