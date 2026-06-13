import { useState } from 'react'
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Enviar a Resend
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'contacto@yanneris.dev',
          to: 'yanneris.fernandez@gmail.com',
          subject: `Nueva consulta de ${formData.name} - ${formData.service}`,
          html: `
            <h2>Nueva Consulta</h2>
            <p><strong>Nombre:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Teléfono:</strong> ${formData.phone}</p>
            <p><strong>Servicio:</strong> ${formData.service}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${formData.message}</p>
          `
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
              Hablemos de tu Proyecto
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              Estoy disponible para consultas sobre marketing estratégico, publicidad digital, IA y automatización.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <a href="mailto:yanneris.fernandez@gmail.com" className="text-blue-600 hover:underline">
                    yanneris.fernandez@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Teléfono</h3>
                  <a href="tel:+34663933195" className="text-blue-600 hover:underline">
                    +34 663 933 195
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/yanneris-fernandez/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Conecta conmigo
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Instagram className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Instagram</h3>
                  <a href="https://www.instagram.com/soyyanneris/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    @soyyanneris
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-xl">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ¡Gracias! He recibido tu mensaje. Te contactaré pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Servicio de Interés</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Marketing Estratégico">Marketing Estratégico</option>
                  <option value="Publicidad Digital">Publicidad Digital</option>
                  <option value="IA y Automatización">IA y Automatización</option>
                  <option value="Consultoría Digital">Consultoría Digital</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-bold"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
