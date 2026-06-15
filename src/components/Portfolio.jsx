export default function Portfolio() {
  const cases = [
    {
      title: 'Aumento de Ventas en E-commerce',
      category: 'Publicidad Digital',
      result: '250% aumento en ventas',
      emoji: '🛒'
    },
    {
      title: 'Posicionamiento en Redes Sociales',
      category: 'Marketing Estratégico',
      result: '15K seguidores en 6 meses',
      emoji: '📱'
    },
    {
      title: 'Automatización de Procesos',
      category: 'IA y Automatización',
      result: '80% reducción de tiempo',
      emoji: '⚙️'
    },
    {
      title: 'Estrategia de Contenidos B2B',
      category: 'Marketing Estratégico',
      result: '45 leads al mes',
      emoji: '📊'
    },
    {
      title: 'Campaña de Rebranding',
      category: 'Marketing Estratégico',
      result: '180% aumento en consultas',
      emoji: '🎨'
    },
    {
      title: 'Integración de IA en Atención al Cliente',
      category: 'IA y Automatización',
      result: '95% satisfacción del cliente',
      emoji: '🤖'
    }
  ]

  return (
    <section id="portafolio" className="bg-amber-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-gray-900">Casos de Éxito</h2>
        <div className="divider mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white p-8 rounded-lg">
              <div className="text-5xl mb-4">{caseItem.emoji}</div>
              <p className="text-sm text-rose-600 font-semibold mb-2">{caseItem.category}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{caseItem.title}</h3>
              <p className="text-lg font-bold gradient-text">{caseItem.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
