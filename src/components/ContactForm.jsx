import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el email
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu consulta! Te contactaremos pronto.')
    setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-gray-900">Hablemos de tu Proyecto</h2>
        <div className="divider mb-12"></div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-rose-500 outline-none text-gray-900 bg-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-rose-500 outline-none text-gray-900 bg-transparent"
            />
          </div>

          <input
            type="tel"
            name="telefono"
            placeholder="+34 600 000 000"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-rose-500 outline-none text-gray-900 bg-transparent"
          />

          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-rose-500 outline-none text-gray-900 bg-transparent"
          >
            <option value="">Selecciona un servicio</option>
            <option value="marketing">Marketing Estratégico</option>
            <option value="publicidad">Publicidad Digital</option>
            <option value="ia">IA y Automatización</option>
            <option value="consultoria">Consultoría Digital</option>
          </select>

          <textarea
            name="mensaje"
            placeholder="Cuéntame sobre tu proyecto..."
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-rose-500 outline-none text-gray-900 bg-transparent resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg hover:from-rose-500 hover:to-rose-600 transition-all font-semibold text-lg"
          >
            Enviar Consulta
          </button>
        </form>
      </div>
    </section>
  )
}
