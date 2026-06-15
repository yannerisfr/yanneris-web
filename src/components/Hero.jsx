import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-rose-900 leading-tight">
              Transforma tu Negocio
            </h1>
            
            <p className="text-lg md:text-xl text-rose-800 mb-8 leading-relaxed">
              Especialista en Marketing Estratégico, Publicidad Digital, IA y Automatización. He ayudado a 50+ empresas a crecer con estrategias comprobadas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/60 backdrop-blur p-4 rounded-lg border border-rose-200">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-rose-700 font-medium">Años</div>
              </div>
              <div className="bg-white/60 backdrop-blur p-4 rounded-lg border border-rose-200">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-rose-700 font-medium">Clientes</div>
              </div>
              <div className="bg-white/60 backdrop-blur p-4 rounded-lg border border-rose-200">
                <div className="text-3xl font-bold gradient-text">300%</div>
                <div className="text-sm text-rose-700 font-medium">ROI</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                Solicitar Consulta <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portafolio"
                className="px-8 py-4 border-2 border-rose-400 text-rose-700 rounded-lg hover:bg-rose-100 transition-all font-bold"
              >
                Ver Casos de Éxito
              </a>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="z-10 hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-pink-300 rounded-2xl transform rotate-3 opacity-30"></div>
              <div className="relative bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl p-8 border-4 border-white shadow-xl">
                <div className="bg-white rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">Estrategia Digital</h3>
                  <p className="text-rose-700">Resultados comprobados y medibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
