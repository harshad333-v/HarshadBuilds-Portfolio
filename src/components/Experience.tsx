import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const jobs = [
  { company: "PNINFOSYS.", role: "Web Designer", period: "Sep-2025 – Oct-2025", },
  { company: "EduSkills", role: "MERN Stack Developer", period: "Jan 2026 – March 2026" },
];

const Experience = () => {
  return (
    <section id="resume" className="section-spacing">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">My journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            EXPERIENCE & <span className="text-gradient">EDUCATION</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase size={18} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Work Experience & Internship</h3>
            </div>

            <div className="relative pl-8 border-l border-foreground/10">
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative mb-10 last:mb-0"
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <div className="glass rounded-xl p-6 glow-border-hover transition-all duration-500">
                    <span className="text-primary text-xs font-medium tracking-wider">{job.period}</span>
                    <h4 className="text-foreground font-semibold mt-1">{job.role}</h4>
                    <p className="text-secondary-foreground text-sm mt-1">{job.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="relative pl-8 border-l border-foreground/10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-background border-2 border-primary" />
                <div className="glass rounded-xl p-6 glow-border-hover transition-all duration-500">
                  <span className="text-primary text-xs font-medium tracking-wider">2024 – 2028</span>
                  <h4 className="text-foreground font-semibold mt-1">B.Tech in Computer Science</h4>
                  <p className="text-secondary-foreground text-sm mt-1">ITM University, Gwalior</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
