# Yanneris - Sitio Web Profesional

Sitio web profesional de Yanneris Fernández, especialista en Marketing Estratégico, Publicidad Digital, IA y Automatización.

## Características

- ✨ Diseño moderno y responsive
- 📱 Optimizado para móviles
- 🚀 Rendimiento rápido con Vite
- 🎨 Estilos con Tailwind CSS
- 📧 Formulario de contacto integrado con Resend

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue

El proyecto está configurado para desplegarse en Vercel. Solo necesitas conectar tu repositorio de GitHub a Vercel.

### Variables de Entorno

Crea un archivo `.env.local` con:

```
VITE_RESEND_API_KEY=tu_api_key_aqui
```

## Estructura

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Experience.jsx
│   ├── Portfolio.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Tecnologías

- React 19
- Vite
- Tailwind CSS
- Lucide Icons
- Resend (Email)
