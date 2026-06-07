import { motion } from "framer-motion";
import { Gift, Calendar, Phone, Instagram, Mail, MessageCircle } from "lucide-react";

// Constants for Footer content
const FOOTER_CONTENT = {
  slogan: "Transformemos tu presencia digital en un motor de ventas constante",
  cta: "Reservar Auditoría",
  contact: [
    {
      icon: MessageCircle,
      label: "+58 412-5497791",
      href: "https://wa.me/584125497791",
      target: "_blank"
    },
    {
      icon: Instagram,
      label: "@andris_marketer",
      href: "https://www.instagram.com/andris_mkt?igsh=dmlweWRrbjhkMG85&utm_source=q",
      target: "_blank"
    },
    {
      icon: Mail,
      label: "Andrismarketer@gmail.com",
      href: "mailto:Andrismarketer@gmail.com"
    }
  ]
};

// Sub-component for contact link
const ContactLink = ({ icon: Icon, label, href, target }) => (
  <a 
    href={href} 
    target={target || undefined}
    rel={target ? "noopener noreferrer" : undefined}
    className="flex flex-col items-center gap-3 text-light-gray hover:text-accent transition-colors"
  >
    <Icon className="w-6 h-6" />
    <span className="font-semibold text-sm">{label}</span>
  </a>
);

// Sub-component for footer section
const FooterSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-dark-lighter p-8 rounded-3xl max-w-4xl mx-auto"
  >
    <div className="flex items-center justify-center gap-3 mb-6">
      <img 
        src="/image/logo andris.png" 
        alt="Andris Marketer - Logo de Andrea Ceballos Marketing Digital" 
        className="w-32 h-32 object-contain"
      />
    </div>
    <h3 className="text-display text-2xl font-bold text-white text-center mb-4">
      {FOOTER_CONTENT.slogan}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
      {FOOTER_CONTENT.contact.map((contact, index) => (
        <ContactLink
          key={index}
          icon={contact.icon}
          label={contact.label}
          href={contact.href}
          target={contact.target}
        />
      ))}
    </div>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://wa.me/584125497791?text=Hola%20Andrea%20✨%20Me%20gustaría%20reservar%20una%20auditoría%20gratuita%20para%20mi%20negocio%20🚀', '_blank')}
      className="bg-accent text-dark font-bold text-lg px-8 py-4 rounded-full hover:bg-accent-light transition-colors w-full md:w-auto mx-auto block"
    >
      {FOOTER_CONTENT.cta}
    </motion.button>
  </motion.div>
);

export default function PricingAndBonus() {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <FooterSection />
      </div>
    </section>
  );
}
