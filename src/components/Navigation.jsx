import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Contacto', href: '#contacto' }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-rose-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold gradient-text">
              Yanneris
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-rose-800 hover:text-rose-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contacto"
              className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all font-medium"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-rose-700 hover:text-rose-600"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4 bg-rose-50">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-rose-800 hover:text-rose-600 transition-colors font-medium py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="block w-full px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg text-center hover:from-rose-600 hover:to-pink-600 transition-all font-medium mx-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contactar
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
