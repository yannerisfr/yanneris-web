import { Mail, Phone, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Yanneris</h3>
            <p className="text-gray-400">
              Especialista en Marketing Estratégico, Publicidad Digital, IA y Automatización.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
              <li><a href="#portafolio" className="hover:text-white transition">Portafolio</a></li>
              <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:yanneris.fernandez@gmail.com" className="hover:text-white transition">
                  yanneris.fernandez@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+34663933195" className="hover:text-white transition">
                  +34 663 933 195
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 Yanneris Fernández. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/yanneris-fernandez/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/soyyanneris/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
