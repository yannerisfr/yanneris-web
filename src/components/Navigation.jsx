import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold gradient-text">
            Yanneris
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-gray-700 hover:text-rose-600 transition">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-rose-600 transition">Servicios</a>
            <a href="#portafolio" className="text-gray-700 hover:text-rose-600 transition">Portafolio</a>
            <a href="#contacto" className="text-gray-700 hover:text-rose-600 transition">Contacto</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contacto"
              className="px-6 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg hover:from-rose-500 hover:to-rose-600 transition-all font-semibold"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4 bg-amber-50">
            <a href="#hero" className="block text-gray-700 py-2 px-4" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
            <a href="#servicios" className="block text-gray-700 py-2 px-4" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
            <a href="#portafolio" className="block text-gray-700 py-2 px-4" onClick={() => setMobileMenuOpen(false)}>Portafolio</a>
            <a href="#contacto" className="block text-gray-700 py-2 px-4" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
            <a href="#contacto" className="block w-full px-6 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg text-center font-semibold mx-4" onClick={() => setMobileMenuOpen(false)}>Contactar</a>
          </div>
        )}
      </div>
    </nav>
  )
}
