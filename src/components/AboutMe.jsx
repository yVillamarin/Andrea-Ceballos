import { motion } from "framer-motion";
import { Palette, Target } from "lucide-react";

// Constants for AboutMe content
const ABOUT_CONTENT = {
  subtitle: "Tu consultora de marketing digital y diseño gráfico",
  name: "Andrea Ceballos",
  description: "Diseñadora gráfica y consultora de marketing digital con especialización en estrategia de marca. Me siento con cada cliente a analizar la psicología de su comprador, optimizar sus campañas publicitarias y estructurar su comunicación con datos reales para maximizar resultados.",
  points: [
    {
      icon: Palette,
      text: "Con un enfoque 100% autodidacta y analítico, ayudo a negocios a alcanzar sus objetivos comerciales mediante diseño gráfico profesional y la optimización de estrategias orgánicas y publicitarias de marketing digital."
    },
    {
      icon: Target,
      text: "Mi misión es lograr que negocios y proyectos puedan alcanzar el éxito que desean, transformando su creatividad en resultados tangibles y crecimiento sostenible mediante planes de marketing personalizados."
    }
  ],
  quote: "No necesitas más seguidores. Necesitas los seguidores correctos y el mensaje correcto para convertirlos en clientes.",
  quoteAuthor: "Andrea Ceballos"
};

// Sub-component for profile image
const ProfileImage = () => (
  <div className="relative">
    <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-accent p-2">
      <div className="w-full h-full rounded-full bg-dark-lighter flex items-center justify-center overflow-hidden">
        <img 
          src="/image/DSC08416.jpg.jpeg" 
          alt="Andrea Ceballos - Consultora de Marketing Digital y Diseño Gráfico Profesional" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 blur-xl"></div>
  </div>
);

// Sub-component for feature point
const FeaturePoint = ({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-start gap-4 bg-dark-lighter p-4 rounded-xl"
  >
    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-dark" />
    </div>
    <p className="text-light-gray text-sm leading-relaxed">{text}</p>
  </motion.div>
);

// Sub-component for quote block
const QuoteBlock = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
    className="bg-accent p-6 rounded-2xl"
  >
    <p className="text-dark font-semibold text-lg italic">"{ABOUT_CONTENT.quote}"</p>
    <p className="text-dark text-sm mt-2">— {ABOUT_CONTENT.quoteAuthor}</p>
  </motion.div>
);

export default function AboutMe() {
  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ProfileImage />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-lg mb-2 block">
              {ABOUT_CONTENT.subtitle}
            </span>
            <h2 className="text-display text-3xl md:text-5xl font-bold text-white mb-6">
              {ABOUT_CONTENT.name}
            </h2>
            <p className="text-light-gray text-base md:text-lg leading-relaxed mb-6">
              {ABOUT_CONTENT.description}
            </p>

            <div className="space-y-4 mb-6">
              {ABOUT_CONTENT.points.map((point, index) => (
                <FeaturePoint
                  key={index}
                  icon={point.icon}
                  text={point.text}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>

            <QuoteBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
