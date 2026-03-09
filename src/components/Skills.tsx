import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

const SkillBar = ({ name, level, delay }: SkillBarProps) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-primary">{level}%</span>
    </div>
    <div className="h-1 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary to-hover-cyan rounded-full"
      />
    </div>
  </div>
);

const software = [
  { name: "Photoshop", level: 95 },
  { name: "Illustrator", level: 90 },
  { name: "InDesign", level: 85 },
  { name: "Premiere", level: 80 },
  { name: "After Effects", level: 75 },
];

const languages = [
  { name: "English", level: 95 },
  { name: "Arabic", level: 80 },
  { name: "Turkish", level: 60 },
];

const personal = [
  { name: "Creativity", level: 95 },
  { name: "Teamwork", level: 90 },
  { name: "Organization", level: 85 },
];

const Skills = () => {
  return (
    <section className="section-spacing">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">What I know</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            MY <span className="text-gradient">SKILLS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 glow-border-hover transition-all duration-500 space-y-5"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Software Skills</h3>
            {software.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.1} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-2xl p-8 glow-border-hover transition-all duration-500 space-y-5"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Languages</h3>
            {languages.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.1} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 glow-border-hover transition-all duration-500 space-y-5"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Personal Skills</h3>
            {personal.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
