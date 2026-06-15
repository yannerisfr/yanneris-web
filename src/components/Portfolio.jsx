import { useState } from 'react'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Boost',
      category: 'publicidad',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=400&fit=crop',
      result: '+250% en ventas',
      description: 'Campaña de publicidad digital para tienda online'
    },
    {
      id: 2,
      title: 'Social Media Growth',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
      result: '15K seguidores',
      description: 'Estrategia de contenidos en redes sociales'
    },
    {
      id: 3,
      title: 'Automatización Inteligente',
      category: 'ia',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
      result: '80% menos tiempo',
      description: 'Implementación de IA y automatización'
    },
    {
      id: 4,
      title: 'B2B Lead Generation',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
      result: '45 leads/mes',
      description: 'Estrategia B2B con LinkedIn y email'
    },
    {
      id: 5,
      title: 'Rebranding Exitoso',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop',
      result: '+180% consultas',
      description: 'Rediseño de marca y posicionamiento'
    },
    {
      id: 6,
      title: 'Chatbot IA 24/7',
      category: 'ia',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8d5b3c71f169b83f3e4b4b4b4?w=500&h=400&fit=crop',
      result: '95% satisfacción',
      description: 'Atención al cliente con IA'
    }
  ]

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="portafolio" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-gray-900">Trabajos Realizados</h2>
        <p className="text-xl text-gray-600 mb-12">Proyectos que transformaron negocios</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-rose-500 text-white'
                : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-rose-500'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('marketing')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'marketing'
                ? 'bg-rose-500 text-white'
                : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-rose-500'
            }`}
          >
            Marketing
          </button>
          <button
            onClick={() => setFilter('publicidad')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'publicidad'
                ? 'bg-rose-500 text-white'
                : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-rose-500'
            }`}
          >
            Publicidad
          </button>
          <button
            onClick={() => setFilter('ia')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'ia'
                ? 'bg-rose-500 text-white'
                : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-rose-500'
            }`}
          >
            IA
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.result}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-rose-500 font-semibold mb-2">{project.category.toUpperCase()}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
