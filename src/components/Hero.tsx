import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ThreeScene from "./ThreeScene";

const socials = [
  { icon: faBehance, href: "#" },
  { icon: faFacebookF, href: "#" },
  { icon: faInstagram, href: "#" },
  { icon: faPinterestP, href: "#" },
  { icon: faTwitter, href: "#" },
  { icon: faWhatsapp, href: "#" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ThreeScene />
      <div className="container-portfolio relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Creative Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-4"
          >
            JASON
            <br />
            <span className="text-gradient">MARTIN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-secondary-foreground mb-8"
          >
            Graphic Designer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 flex-wrap mb-10"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-2.5 rounded-full border border-foreground/20 text-sm font-medium
                hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              Portfolio
            </motion.a>
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium
                hover:bg-hover-cyan transition-all duration-300"
            >
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-4"
          >
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center
                  text-secondary-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm"
              >
                <FontAwesomeIcon icon={s.icon} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-hover-cyan/10 animate-pulse-glow" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-card-dark to-background border border-border flex items-center justify-center">
              <span className="text-6xl font-bold text-gradient">JM</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
