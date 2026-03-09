import { motion } from "framer-motion";
import { Palette, FileText, Award, Mail, Package, BookOpen, Target, Megaphone } from "lucide-react";

const services = [
  { icon: Palette, title: "Logo Design", desc: "Memorable brand identities that stand out" },
  { icon: FileText, title: "Stationery", desc: "Professional business collateral design" },
  { icon: Award, title: "Branding", desc: "Complete brand strategy and visual systems" },
  { icon: Mail, title: "Newsletter", desc: "Engaging email and newsletter designs" },
  { icon: Package, title: "Packaging", desc: "Eye-catching product packaging solutions" },
  { icon: BookOpen, title: "Catalog", desc: "Beautiful catalog and publication design" },
  { icon: Target, title: "Strategy", desc: "Data-driven creative strategy consulting" },
  { icon: Megaphone, title: "Advertisements", desc: "High-impact advertising campaigns" },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">What I offer</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            MY <span className="text-gradient">SERVICES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-8 text-center group cursor-pointer glow-border-hover transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center
                group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-secondary-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
