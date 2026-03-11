import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import harshadraj from "../asset/harshad.jpeg";

const About = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            ABOUT <span className="text-gradient">ME</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-secondary-foreground leading-relaxed text-lg">
              I am a second-year B.Tech Computer Science student focused on MERN
              stack development. Skilled in JavaScript, C, Java, Python, HTML,
              CSS, Bootstrap, Tailwind CSS, and MySQL, with a growing foundation
              in Data Structures and Algorithms. I enjoy building projects,
              solving problems, and continuously learning new technologies. My
              goal is to become a professional software engineer and build
              impactful digital products.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:gptharshad@gmail.com"
                className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:glow-border transition-all">
                  <Mail size={16} className="text-primary" />
                </span>
                gptharshad@gmail.com
              </a>
              <div className="flex items-center gap-3 text-secondary-foreground">
                <span className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <MapPin size={16} className="text-primary" />
                </span>
                Gwalior, Madhya Pradesh, India.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-hover-cyan/5 glow-border" />
              <div className="absolute inset-1 rounded-2xl bg-card-dark overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="absolute inset-0 full overflow-hidden border border-border bg-gradient-to-br from-card-dark to-background">
                    {" "}
                    <img src={harshadraj} alt="Harshad Raj Gupta" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
