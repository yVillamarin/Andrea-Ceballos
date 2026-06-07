import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

// Constants for Corporate Image Packages content
const PACKAGES_CONTENT = {
  title: "Planes de Marketing y Diseño de Imagen Corporativa",
  subtitle: "Transforma la identidad visual de tu marca con nuestros planes profesionales de marketing y diseño gráfico",
  packages: [
    {
      name: "Plan BÁSICO",
      price: "$40",
      features: [
        "Logotipo simple",
        "Tipografías",
        "5 portadas highlights",
        "Paleta de Colores (2 variaciones)",
        "Guía de uso básica"
      ],
      highlight: false
    },
    {
      name: "Plan INTERMEDIO",
      price: "$75",
      features: [
        "Logotipo Completo (con variaciones)",
        "Plantilla de Publicaciones",
        "Diseño de papelería:",
        "  - Tarjeta de presentación",
        "  - Flyer publicitario",
        "2 plantillas editables para historias",
        "3 Mockups"
      ],
      highlight: true
    },
    {
      name: "Plan PREMIUM",
      price: "$130",
      features: [
        "Todo lo incluido en el plan intermedio",
        "Estrategia de marca",
        "5 Plantillas de redes sociales",
        "Manual de marca",
        "Landing pages"
      ],
      highlight: false
    }
  ]
};

// Sub-component for package card
const PackageCard = ({ name, price, features, highlight, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className={`relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col ${
      highlight 
        ? 'bg-accent border-4 border-dark scale-105' 
        : 'bg-white'
    }`}
  >
    {highlight && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-dark text-accent px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
          <Star className="w-4 h-4" />
          MÁS POPULAR
        </div>
      </div>
    )}
    
    <h3 className={`text-display text-2xl font-bold mb-2 ${highlight ? 'text-dark' : 'text-dark'}`}>
      {name}
    </h3>
    <p className={`text-3xl font-bold mb-6 ${highlight ? 'text-dark' : 'text-accent'}`}>
      {price}
    </p>
    
    <ul className="space-y-3 flex-grow mb-6">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlight ? 'text-dark' : 'text-accent'}`} />
          <span className={`text-sm leading-relaxed ${highlight ? 'text-dark' : 'text-dark'}`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://wa.me/584125497791?text=Hola%20Andrea%20✨%20Me%20interesa%20el%20' + encodeURIComponent(name) + '%20de%20Imagen%20Corporativa%20💼%20¿Podrías%20darme%20más%20información%3F', '_blank')}
      className={`font-bold text-base px-6 py-4 rounded-full transition-colors w-full ${
        highlight 
          ? 'bg-dark text-accent hover:bg-dark-lighter' 
          : 'bg-accent text-dark hover:bg-accent-light'
      }`}
    >
      Solicitar Información
    </motion.button>
  </motion.div>
);

// Sub-component for section header
const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-display text-3xl md:text-5xl font-bold text-dark mb-4">
      {PACKAGES_CONTENT.title}
    </h2>
    <p className="text-dark text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
      {PACKAGES_CONTENT.subtitle}
    </p>
  </motion.div>
);

export default function CorporateImagePackages() {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PACKAGES_CONTENT.packages.map((pkg, index) => (
            <PackageCard
              key={index}
              name={pkg.name}
              price={pkg.price}
              features={pkg.features}
              highlight={pkg.highlight}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
