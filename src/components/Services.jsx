export default function Services() {
  const services = [
    {
      title: 'Marketing Estratégico',
      emoji: '🎯',
      description: 'Estrategias personalizadas para posicionar tu marca y captar clientes ideales.'
    },
    {
      title: 'Publicidad Digital',
      emoji: '📈',
      description: 'Campañas en Google Ads, Meta y otras plataformas con ROI comprobado.'
    },
    {
      title: 'IA y Automatización',
      emoji: '🤖',
      description: 'Implementa IA en tu negocio para automatizar procesos y ahorrar tiempo.'
    },
    {
      title: 'Consultoría Digital',
      emoji: '⚡',
      description: 'Asesoramiento integral para transformar tu negocio digitalmente.'
    }
  ]

  return (
    <section id="servicios" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-gray-900">Servicios</h2>
        <div className="divider mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="pb-12 border-b border-gray-200 last:border-b-0">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{service.emoji}</span>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-lg text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
