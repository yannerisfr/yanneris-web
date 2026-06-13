import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
            Transforma tu Negocio con <span className="gradient-text">Marketing Estratégico</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Especialista en Marketing Digital, Publicidad, IA y Automatización. He ayudado a 50+ empresas a crecer con estrategias comprobadas.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">10+</div>
              <div className="text-slate-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
              <div className="text-slate-600">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">300%</div>
              <div className="text-slate-600">ROI Promedio</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-bold flex items-center justify-center gap-2 text-lg"
            >
              Solicitar Consulta <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portafolio"
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-bold text-lg"
            >
              Ver Casos de Éxito
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
