import { useState } from 'react'
import { Menu, X, ArrowRight, CheckCircle, Zap, Target, BarChart3, Mail, Phone, Linkedin, Instagram } from 'lucide-react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Experience />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  )
}
