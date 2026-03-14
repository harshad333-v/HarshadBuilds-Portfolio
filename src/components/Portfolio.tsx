import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import tripboss from "../asset/Tripboss.png";
import space from "../asset/spaceEdu.png";
import quiz from "../asset/quiz.png";
import currency_conveter from "../asset/CurrenctConveter.png";
import { link } from "fs";

const filters = ["All"];

const projects = [
  {
    title: "TripBoss Travel Website",
    category: "Web",
    desc: "Modern travel booking platform.",
    tech: [""],
    image: tripboss,
    link: ["https://harshad333-v.github.io/TripBoss-Travel-site/"],
  },
  {
    title: "Space Education Portal",
    category: "Web",
    desc: "Interactive learning platform about space.",
    tech: [""],
    image: space,
    link: [""],
  },
  {
    title: "Quiz Website",
    category: "Web",
    desc: "Online quiz system with scoring.",
    tech: [""],
    image: quiz,  
    link: [""],
  },
  {
    title: "Currency Converter",
    category: "Web",
    desc: "Real-time currency conversion tool.",
    tech: [""],
    image: currency_conveter,
    link: ["https://currencyconverter-ba9g.onrender.com/"],
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-spacing">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            My work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            RECENT <span className="text-gradient">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActive(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "glass text-secondary-foreground hover:text-primary"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer glow-border-hover transition-all duration-500"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary to-card-dark overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <ExternalLink
                              size={18}
                              className="text-foreground"
                            />
                          </motion.div>
                        </div>
                      </div>{" "}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ExternalLink size={18} className="text-foreground" />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-primary text-xs font-medium tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-foreground font-semibold text-lg mt-1">
                    {project.title}
                  </h3>
                  <p className="text-secondary-foreground text-sm mt-2">
                    {project.desc}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a
                      href= {project.link}
                      target="_blank"
                      className="text-xs px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition"
                    >
                      Live
                    </a>

                  
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
