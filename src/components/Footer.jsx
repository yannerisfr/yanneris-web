import { Mail, Phone, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-900 to-pink-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Yanneris</h3>
            <p className="text-rose-200">
              Especialista en Marketing Estratégico, Publicidad Digital, IA y Automatización.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-rose-100">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-rose-200">
              <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
              <li><a href="#experiencia" className="hover:text-white transition">Experiencia</a></li>
              <li><a href="#portafolio" className="hover:text-white transition">Portafolio</a></li>
              <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-rose-100">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:yanneris.fernandez@gmail.com" className="text-rose-200 hover:text-white transition">
                  yanneris.fernandez@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+34663933195" className="text-rose-200 hover:text-white transition">
                  +34 663 933 195
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-rose-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-rose-200">© 2024 Yanneris Fernández. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/yanneris-fernandez/" target="_blank" rel="noopener noreferrer" className="text-rose-200 hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/soyyanneris/" target="_blank" rel="noopener noreferrer" className="text-rose-200 hover:text-white transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
