export default function Hero() {
  return (
    <section id="hero" className="bg-amber-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Transforma tu Negocio
            </h1>
            
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Especialista en Marketing Estratégico, Publicidad Digital, IA y Automatización. He ayudado a 50+ empresas a crecer con estrategias comprobadas.
            </p>

            {/* Stats */}
            <div className="space-y-6 mb-12">
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">10+</div>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">50+</div>
                <p className="text-gray-600">Clientes Satisfechos</p>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">300%</div>
                <p className="text-gray-600">ROI Promedio</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg hover:from-rose-500 hover:to-rose-600 transition-all font-semibold text-center"
              >
                Solicitar Consulta
              </a>
              <a
                href="#portafolio"
                className="px-8 py-4 border-2 border-rose-400 text-rose-600 rounded-lg hover:bg-rose-50 transition-all font-semibold text-center"
              >
                Ver Casos de Éxito
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-rose-200 to-rose-300 rounded-2xl flex items-center justify-center text-6xl">
              📊
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
