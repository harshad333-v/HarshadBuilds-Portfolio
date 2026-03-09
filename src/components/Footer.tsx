import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container-portfolio">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-secondary-foreground text-sm">
            © 2024 Jason Martin. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[faBehance, faFacebookF, faInstagram, faTwitter].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15 }}
                className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center
                  text-secondary-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm"
              >
                <FontAwesomeIcon icon={icon} />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center
              hover:bg-primary/20 transition-all duration-300"
          >
            <ArrowUp size={16} className="text-primary" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
