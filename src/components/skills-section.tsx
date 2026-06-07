"use client";

import { motion } from "framer-motion";
import { Database, Code2, BarChart3, ShieldCheck } from "lucide-react";
import SectionHeading from "./section-heading";

const skillGroups = [
  {
    icon: Database,
    title: "Databases & Data Engineering",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    skills: ["SQL", "BigQuery", "ETL Pipelines"],
  },
  {
    icon: Code2,
    title: "Programming & ML",
    color: "from-accent-magenta to-accent-purple",
    bgColor: "bg-accent-magenta/10",
    textColor: "text-accent-magenta",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    icon: BarChart3,
    title: "Visualization & BI",
    color: "from-emerald-400 to-teal-400",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-400",
    skills: ["Power BI", "Matplotlib", "Dashboards"],
  },
  {
    icon: ShieldCheck,
    title: "Risk & Methodologies",
    color: "from-amber-400 to-orange-400",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-400",
    skills: ["Credit Risk", "A/B Testing", "XAI (SHAP)", "Data Drift (PSI/CSI)"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Tech Stack"
          title="Tools & Technologies"
          description="The technologies I use to transform data into actionable insights and build robust analytical pipelines."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                className="group relative p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-magenta/20 transition-all duration-500 hover:glow-magenta"
              >
                {/* Icon Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-xl ${group.bgColor} transition-colors duration-300`}
                  >
                    <Icon size={20} className={group.textColor} />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary leading-tight">
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-text-secondary border border-border-subtle hover:border-border-accent hover:text-text-primary hover:bg-white/[0.08] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Gradient line at top */}
                <div
                  className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${group.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
