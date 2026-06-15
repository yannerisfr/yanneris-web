import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight">
          Transforma tu Negocio con <span className="gradient-text">Marketing Estratégico</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Especialista en Marketing Digital, Publicidad, IA y Automatización. He ayudado a 50+ empresas a crecer con estrategias comprobadas.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur p-6 rounded-lg">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10+</div>
            <div className="text-sm md:text-base text-slate-600 font-medium">Años de Experiencia</div>
          </div>
          <div className="bg-white/80 backdrop-blur p-6 rounded-lg">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm md:text-base text-slate-600 font-medium">Clientes Satisfechos</div>
          </div>
          <div className="bg-white/80 backdrop-blur p-6 rounded-lg">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">300%</div>
            <div className="text-sm md:text-base text-slate-600 font-medium">ROI Promedio</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-bold flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl"
          >
            Solicitar Consulta <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portafolio"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-bold text-lg"
          >
            Ver Casos de Éxito
          </a>
        </div>
      </div>
    </section>
  )
}
