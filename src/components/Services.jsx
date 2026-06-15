import { Zap, Target, BarChart3, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Target,
      title: 'Marketing Estratégico',
      description: 'Estrategias personalizadas para posicionar tu marca y captar clientes ideales.',
      features: ['Análisis de mercado', 'Posicionamiento', 'Estrategia de contenidos']
    },
    {
      icon: BarChart3,
      title: 'Publicidad Digital',
      description: 'Campañas en Google Ads, Meta y otras plataformas con ROI comprobado.',
      features: ['Google Ads', 'Facebook/Instagram', 'LinkedIn Ads']
    },
    {
      icon: Lightbulb,
      title: 'IA y Automatización',
      description: 'Implementa IA en tu negocio para automatizar procesos y ahorrar tiempo.',
      features: ['Chatbots IA', 'Automatización de procesos', 'Análisis predictivo']
    },
    {
      icon: Zap,
      title: 'Consultoría Digital',
      description: 'Asesoramiento integral para transformar tu negocio digitalmente.',
      features: ['Auditoría digital', 'Plan de acción', 'Implementación']
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Servicios que Transforman Negocios
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones integrales de marketing digital, IA y automatización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:translate-y-[-4px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
