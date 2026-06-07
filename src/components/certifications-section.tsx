"use client";

import { motion, Variants } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import SectionHeading from "./section-heading";

const certifications = [
  {
    id: 1,
    title: "Google Data Analytics",
    issuer: "Google",
    link: "https://drive.google.com/file/d/1REuzsYZRENMYoXu8EtXBs28QuWm5E16u/view?usp=sharing",
    accent: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    link: "https://drive.google.com/file/d/1TO7YL8eH9LQy73wOxP2l4yOwfJ4DK_ag/view?usp=sharing",
    accent: "from-accent-magenta to-accent-purple",
  },
  {
    id: 3,
    title: "Google Business Intelligence",
    issuer: "Google",
    link: "https://drive.google.com/file/d/1EEY9GqognE48MkLq5EPfdjQO9wydGXZb/view?usp=sharing",
    accent: "from-emerald-400 to-teal-400",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Credentials"
          title="Licenses & Certifications"
          description="Professional certifications validating my expertise in data analytics, advanced methodologies, and business intelligence."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative flex flex-col p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-accent transition-all duration-500 cursor-pointer hover:glow-cyan"
            >
              <div className="flex items-start gap-4 mb-2">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-300">
                  <Award size={24} className="text-text-primary group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
                <div className="flex-1 mt-1">
                  <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{cert.issuer}</p>
                </div>
                <ArrowUpRight size={18} className="text-text-muted group-hover:text-cyan-400 transition-colors mt-1" />
              </div>
              
              <div
                className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${cert.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
