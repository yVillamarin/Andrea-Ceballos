import { motion } from "framer-motion";
import { Briefcase, Image, Video, Palette, Megaphone, PenTool, Layout, GraduationCap } from "lucide-react";

// Constants for Services content
const SERVICES_CONTENT = {
  title: "Servicios de Marketing Digital y Diseño Gráfico",
  subtitle: "Soluciones 360° para posicionamiento, estrategia de marca y crecimiento digital",
  services: [
    {
      icon: Briefcase,
      title: "Consultoría de Marca",
      description: "Estrategia de marca para emprendedores y PYMES"
    },
    {
      icon: Image,
      title: "Diseño de Imagen Corporativa",
      description: "Identidad visual profesional y branding"
    },
    {
      icon: Video,
      title: "Producción Audiovisual",
      description: "Contenido multimedia para marketing digital"
    },
    {
      icon: Palette,
      title: "Diseño Gráfico Profesional",
      description: "Creatividad visual impactante para tu marca"
    },
    {
      icon: Megaphone,
      title: "Campañas de Meta ADS",
      description: "Publicidad digital efectiva en redes sociales"
    },
    {
      icon: PenTool,
      title: "Marketing de Contenidos",
      description: "Estrategias de contenido orgánico y engagement"
    },
    {
      icon: Layout,
      title: "Landing Pages",
      description: "Páginas de conversión optimizadas para ventas"
    },
    {
      icon: GraduationCap,
      title: "Talleres de IA",
      description: "Implementación de Inteligencia Artificial en marketing"
    }
  ]
};

// Sub-component for service card
const ServiceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col"
  >
    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-dark" />
    </div>
    <h3 className="text-display text-xl font-bold text-dark mb-2">
      {title}
    </h3>
    <p className="text-dark text-sm leading-relaxed mb-4 flex-grow">
      {description}
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://wa.me/584125497791?text=Hola%20Andrea%20✨%20Me%20interesa%20el%20servicio%20de%20' + encodeURIComponent(title) + '%20💼%20¿Podrías%20darme%20más%20información%3F', '_blank')}
      className="bg-accent text-dark font-bold text-base px-6 py-4 rounded-full hover:bg-accent-light transition-colors w-full"
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
      {SERVICES_CONTENT.title}
    </h2>
    <p className="text-dark text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
      {SERVICES_CONTENT.subtitle}
    </p>
  </motion.div>
);

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {SERVICES_CONTENT.services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
