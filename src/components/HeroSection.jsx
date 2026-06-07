import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

// Constants for hero content
const HERO_CONTENT = {
  name: "Andrea Ceballos",
  title: "Marketing Digital y Diseño Gráfico Profesional",
  subtitle: "Transformo marcas estancadas en negocios con propósito. Combinando estrategia de marketing digital, diseño gráfico profesional, producción audiovisual e Inteligencia Artificial para que dejes de regalarle clientes a tu competencia con planes de marketing personalizados.",
  cta: "Quiero una auditoría gratuita"
};

// Sub-component for logo
const Logo = () => (
  <div className="flex flex-col items-center gap-4 mb-6">
    
  </div>
);

// Sub-component for phone mockup
const PhoneMockup = () => (
  <div className="relative">
    <div className="w-80 h-[550px] md:w-96 md:h-[650px] bg-dark-lighter rounded-[3rem] border-4 border-accent p-3 shadow-2xl">
      <div className="w-full h-full bg-gradient-to-b from-accent/20 to-dark rounded-[2.5rem] overflow-hidden relative">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-dark rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full h-full bg-dark-lighter rounded-2xl flex items-center justify-center overflow-hidden">
            <img 
              src="/image/DSC08437.jpg.jpeg" 
              alt="Andrea Ceballos - Consultora de Marketing Digital y Diseño Gráfico" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl"></div>
    <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-10 blur-3xl"></div>
  </div>
);

// Sub-component for CTA button
const CTAButton = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => window.open('https://wa.me/584125497791?text=Hola%20Andrea%20✨%20Me%20gustaría%20solicitar%20una%20auditoría%20gratuita%20para%20mi%20negocio%20🚀', '_blank')}
    className="bg-accent text-dark font-bold text-lg px-8 py-4 rounded-full hover:bg-accent-light transition-colors w-full sm:w-auto"
  >
    {HERO_CONTENT.cta}
  </motion.button>
);

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-dark relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-accent/10"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <Logo />
            
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {HERO_CONTENT.title}
            </h1>

            <p className="text-lg md:text-xl text-light-gray mb-8 leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>

            <CTAButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            <div className="relative w-80 h-[500px] md:w-96 md:h-[600px] flex items-center justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-accent p-3">
                <div className="w-full h-full rounded-full bg-dark-lighter flex items-center justify-center overflow-hidden">
                  <img 
                    src="/image/IMG_1439.JPG.jpeg" 
                    alt="Andrea Ceballos - Experta en Marketing Digital y Estrategia de Marca" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
