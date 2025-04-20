'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navbarClass = 'fixed w-full z-50 bg-white bg-opacity-95 text-primary shadow-sm py-6';

  return (
    <nav className={navbarClass}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link hover:text-gray-400">Home</Link>
            <Link href="/pages/notre-histoire" className="nav-link hover:text-gray-400">Notre Histoire</Link>
            <Link href="/pages/nos-voeux" className="nav-link hover:text-gray-400">Nos Voeux</Link>
          </div>

          {/* Always Centered Logo */}
          <div className="hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link href="/">
              <span className="font-serif text-xl uppercase tracking-wider">Alexandre & Sandrine</span>
            </Link>
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/ceremonie/preparations" className="nav-link hover:text-gray-400">Préparations</Link>
            <Link href="/ceremonie/plans" className="nav-link hover:text-gray-400">Plans</Link>
            <Link href="/pages/questions" className="nav-link hover:text-gray-400">Questions</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-current focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full py-4 shadow-md">
          <div className="container-custom">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="nav-link block py-2 text-primary hover:text-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/pages/notre-histoire" 
                className="nav-link block py-2 text-primary hover:text-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/pages/nos-voeux" 
                className="nav-link block py-2 text-primary hover:text-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nos Voeux
              </Link>
              <Link 
                href="/ceremonie/preparations" 
                className="nav-link block py-2 text-primary hover:text-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Préparations
              </Link>
              <Link 
                href="/ceremonie/plans" 
                className="nav-link block py-2 text-primary hover:text-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plans
              </Link>
              <Link 
                href="/pages/questions" 
                className="nav-link block py-2 text-primary hover:text-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Questions
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}