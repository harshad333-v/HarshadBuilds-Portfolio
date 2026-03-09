import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            CONTACT <span className="text-gradient">ME</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { name: "name", type: "text", placeholder: "Your Name", value: form.name },
              { name: "email", type: "email", placeholder: "Your Email", value: form.email },
            ].map((field) => (
              <div key={field.name}>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground
                    placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1
                    focus:ring-primary/50 transition-all duration-300 text-sm"
                  required
                />
              </div>
            ))}
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border text-foreground
                placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1
                focus:ring-primary/50 transition-all duration-300 text-sm resize-none"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm
                hover:bg-hover-cyan transition-all duration-300 flex items-center gap-2"
            >
              Send Message <Send size={16} />
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "jmartin@uptowork.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Location", value: "Florida, Orlando" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 glass rounded-xl p-5 glow-border-hover transition-all duration-500">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {[faBehance, faInstagram, faTwitter].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-secondary-foreground
                    hover:text-primary hover:glow-border transition-all duration-300"
                >
                  <FontAwesomeIcon icon={icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
