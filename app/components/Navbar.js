'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-maroon to-primary shadow-2xl border-b-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <a href="/" className="hover:opacity-90 transition-opacity duration-300">
                <img src="/Logo/TA_LOGO_Final_white.png" alt="That's Amore Logo" className="h-20 w-auto" />
              </a>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#catering-menu" className="nav-link text-white hover:text-accent transition-colors duration-300">Catering Menu</a>
                <a href="https://thatsamorepizzaonline.com/contact" className="nav-link text-white hover:text-accent transition-colors duration-300">Visit Us</a>
                <a href="#catering-form" className="bg-accent text-dark px-6 py-2 rounded-full font-medium hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="relative w-8 h-8 focus:outline-none focus:text-accent"
              >
                <span className="absolute inset-0 transform transition-all duration-300 ease-in-out">
                  <span className={`absolute top-0 left-0 w-8 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 top-4' : ''}`}></span>
                  <span className={`absolute top-4 left-0 w-8 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`absolute top-8 left-0 w-8 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 top-4' : ''}`}></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Modal */}
      <div className={`fixed inset-0 bg-primary z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-6">
            <a href="/" className="hover:opacity-90 transition-opacity duration-300" onClick={closeMobileMenu}>
              <img src="/Logo/TA_LOGO_Final_white.png" alt="That's Amore Logo" className="h-20 w-auto" />
            </a>
            <button onClick={closeMobileMenu} className="text-white hover:text-accent transition-colors duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="flex flex-col space-y-8 text-center">
              <a href="#catering-menu" className="mobile-nav-link text-white hover:text-accent transition-colors duration-300" onClick={closeMobileMenu}>
                <span className="text-3xl font-heading font-bold">Menu</span>
              </a>
              <a href="https://thatsamorepizzaonline.com/contact" className="mobile-nav-link text-white hover:text-accent transition-colors duration-300" onClick={closeMobileMenu}>
                <span className="text-3xl font-heading font-bold">Visit Us</span>
              </a>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="p-8 text-center">
            <a href="#catering-form" className="bg-accent text-dark px-8 py-4 rounded-full text-xl font-medium hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 inline-block" onClick={closeMobileMenu}>
              Get Quote
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          @apply text-white hover:text-accent transition-colors duration-300 font-medium;
        }

        .mobile-nav-link {
          @apply text-white hover:text-accent transition-colors duration-300 font-medium;
        }
      `}</style>
    </>
  )
}
