import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'


const items = [
{
title: 'Artículo: Diseño Responsivo',
description: 'Cómo adaptar interfaces a móviles, tabletas y escritorios usando utilidades de Tailwind.',
},
{
title: 'Producto: Suite Web',
description: 'Conjunto de herramientas para construir interfaces modernas con React y TypeScript.',
},
{
title: 'Servicio: Auditoría UX',
description: 'Evaluamos la experiencia de usuario y proponemos mejoras basadas en heurísticas y datos.',
},
]


export default function App() {
return (
<div className="min-h-dvh flex flex-col bg-gradient-to-b from-white to-gray-50 text-gray-900">
<Header />


<main id="inicio" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16">
{/* HERO */}
<section aria-labelledby="hero-title" className="text-center">
<h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
Diseño Responsivo con React + TS + Tailwind
</h1>
<p className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
Interfaz limpia, accesible y adaptable. En móvil priorizamos lectura y acciones; en tablet/desktop aprovechamos el espacio.
</p>
</section>


{/* SECTION de Cards */}
<section id="features" aria-labelledby="cards-title" className="mt-10 sm:mt-12 md:mt-16">
<h2 id="cards-title" className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Resumen de Contenidos</h2>


{/* Grid RESPONSIVA:
- Base (≤600px): 1 columna → mejor lectura/apilado en móvil.
- sm: (≥601px): 2 columnas → tabletas.
- md: (≥1025px): 3 columnas → escritorios.
*/}
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{items.map((it) => (
  <Card key={it.title} title={it.title} description={it.description} />
))}

</div>
</section>


{/* CONTACTO simulado */}
<section id="contacto" className="mt-12 sm:mt-14 md:mt-16 text-center">
<p className="text-sm sm:text-base text-gray-600">
¿Dudas? Contáctanos en <a className="underline hover:text-brand-500" href="mailto:hola@example.com">hola@example.com</a>
</p>
</section>
</main>


<Footer />
</div>
)
}