'use client'

import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">
          <a href="#" className="text-[#E01A2B] hover:text-[#c0172b] transition-colors">
            #JusticeForConan
          </a>
        </h1>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#story" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
              Story
            </a>
          </li>
          <li>
            <a href="#article" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
              The Tale
            </a>
          </li>
          <li>
            <a href="#video" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
              Watch
            </a>
          </li>
          <li>
            <a href="#help" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
              Help
            </a>
          </li>
          <li>
            <a href="#token" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
              $CONAN
            </a>
          </li>
          <li>
            <a href="#news" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
              News
            </a>
          </li>
          <li>
            <a href="#community" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
              Community
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="px-4 py-2">
          <li>
            <a href="#story" className="block py-2 text-gray-700 hover:text-[#E01A2B]">Story</a>
          </li>
          <li>
            <a href="#article" className="block py-2 text-gray-700 hover:text-[#E01A2B]">The Tale</a>
          </li>
          <li>
            <a href="#video" className="block py-2 text-gray-700 hover:text-[#E01A2B]">Watch</a>
          </li>
          <li>
            <a href="#help" className="block py-2 text-gray-700 hover:text-[#E01A2B]">Help</a>
          </li>
          <li>
            <a href="#token" className="block py-2 text-gray-700 hover:text-[#E01A2B]">$CONAN</a>
          </li>
          <li>
            <a href="#news" className="block py-2 text-gray-700 hover:text-[#E01A2B]">News</a>
          </li>
          <li>
            <a href="#community" className="block py-2 text-gray-700 hover:text-[#E01A2B]">Community</a>
          </li>
        </ul>
      </div>
    </nav>
  )
} 