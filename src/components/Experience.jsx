import { CheckCircle } from 'lucide-react'

export default function Experience() {
  const sectors = [
    { name: 'Turismo', icon: '✈️' },
    { name: 'Hostelería', icon: '🏨' },
    { name: 'Retail', icon: '🛍️' },
    { name: 'Marca Personal', icon: '👤' },
    { name: 'Tecnología', icon: '💻' },
    { name: 'Servicios', icon: '🔧' }
  ]

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Experiencia en Múltiples Sectores
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              He trabajado con empresas de diferentes industrias, desde startups hasta grandes corporaciones. Mi experiencia en CIMEX me permitió desarrollar estrategias a nivel corporativo.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Estrategias Personalizadas</h3>
                  <p className="text-slate-600">Cada negocio es único, por eso adapto las estrategias a tus necesidades específicas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Resultados Medibles</h3>
                  <p className="text-slate-600">Enfoque basado en datos y métricas comprobables</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Soporte Continuo</h3>
                  <p className="text-slate-600">Acompañamiento integral en la implementación de estrategias</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Sectors Grid */}
          <div className="grid grid-cols-2 gap-4">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                <div className="text-4xl mb-2">{sector.icon}</div>
                <h3 className="font-bold text-slate-900">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
