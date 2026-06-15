import { useEffect, useState } from 'react'

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop)',
          transform: `translateY(${offset * 0.5}px)`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Yanneris Fernández
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-8 text-gray-100">
          Marketing Estratégico & Publicidad Digital
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Transformo negocios con estrategias comprobadas en Marketing, IA y Automatización
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portafolio"
            className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-semibold transition-all"
          >
            Ver Trabajos
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-all"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
