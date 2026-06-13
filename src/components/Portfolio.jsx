import { TrendingUp } from 'lucide-react'

export default function Portfolio() {
  const cases = [
    {
      title: 'Aumento de Ventas en E-commerce',
      category: 'Publicidad Digital',
      challenge: 'Tienda online con bajo tráfico y conversiones',
      result: '250% aumento en ventas',
      metrics: ['Google Ads', 'Retargeting', 'Optimización de conversión']
    },
    {
      title: 'Posicionamiento en Redes Sociales',
      category: 'Marketing Estratégico',
      challenge: 'Marca personal sin presencia digital',
      result: '15K seguidores en 6 meses',
      metrics: ['Estrategia de contenidos', 'Community management', 'Influencer']
    },
    {
      title: 'Automatización de Procesos',
      category: 'IA y Automatización',
      challenge: 'Procesos manuales que consumían 40 horas/semana',
      result: '80% reducción de tiempo',
      metrics: ['Chatbot IA', 'Automatización', 'CRM integrado']
    },
    {
      title: 'Estrategia de Contenidos B2B',
      category: 'Marketing Estratégico',
      challenge: 'Empresa B2B sin leads cualificados',
      result: '45 leads al mes',
      metrics: ['LinkedIn', 'Email marketing', 'Webinars']
    },
    {
      title: 'Campaña de Rebranding',
      category: 'Marketing Estratégico',
      challenge: 'Empresa con imagen desactualizada',
      result: '180% aumento en consultas',
      metrics: ['Identidad visual', 'Posicionamiento', 'Comunicación']
    },
    {
      title: 'Integración de IA en Atención al Cliente',
      category: 'IA y Automatización',
      challenge: 'Alto volumen de consultas sin respuesta rápida',
      result: '95% satisfacción del cliente',
      metrics: ['Chatbot 24/7', 'Respuestas automáticas', 'Escalado inteligente']
    }
  ]

  return (
    <section id="portafolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Casos de Éxito
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proyectos reales con resultados medibles y comprobados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 flex-1">{caseItem.title}</h3>
                <TrendingUp className="w-6 h-6 text-green-500 flex-shrink-0" />
              </div>
              
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {caseItem.category}
              </div>

              <p className="text-slate-600 mb-4">
                <span className="font-semibold">Desafío:</span> {caseItem.challenge}
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <p className="text-green-700 font-bold text-lg">{caseItem.result}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {caseItem.metrics.map((metric, i) => (
                  <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
