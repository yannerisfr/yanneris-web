export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
              alt="Yanneris"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Sobre Mí
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Soy especialista en Marketing Estratégico con más de 10 años de experiencia transformando negocios a través de estrategias digitales comprobadas.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              He trabajado con 50+ empresas en diferentes sectores, desde startups hasta grandes corporaciones, logrando resultados medibles y sostenibles.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Estrategia Personalizada</h3>
                  <p className="text-gray-700">Cada negocio es único, por eso adapto las estrategias a tus necesidades</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Resultados Comprobados</h3>
                  <p className="text-gray-700">ROI promedio de 300% en mis proyectos</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Soporte Continuo</h3>
                  <p className="text-gray-700">Acompañamiento integral en toda tu estrategia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
