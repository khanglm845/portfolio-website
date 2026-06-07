"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Languages, Bot, Briefcase } from "lucide-react";
import Badge from "./badge";

const stats = [
  {
    icon: GraduationCap,
    label: "GPA",
    value: "8.05/10",
    description: "Economic Mathematics",
  },
  {
    icon: Languages,
    label: "TOEIC",
    value: "845",
    description: "English Proficiency",
  },
  {
    icon: Briefcase,
    label: "Focus",
    value: "Credit Risk",
    description: "Fintech & Banking",
  },
  {
    icon: Bot,
    label: "Approach",
    value: "AI-First",
    description: "Co-pilot Driven",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-magenta/10 text-accent-magenta border border-accent-magenta/20 mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Driven by Data, Powered by{" "}
            <span className="gradient-text">Curiosity</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              I&apos;m an Economic Mathematics senior with a deep passion for
              transforming raw data into strategic insights. My focus lies in{" "}
              <span className="text-text-primary font-medium">
                credit risk analytics
              </span>{" "}
              — building predictive models, monitoring portfolio health, and
              applying explainable AI techniques to make data-driven decisions
              transparent and trustworthy.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              I bridge the gap between rigorous quantitative methods and
              real-world fintech applications, always looking for the next
              challenge in the intersection of{" "}
              <span className="text-text-primary font-medium">
                data science and financial regulation
              </span>
              .
            </p>

            {/* AI Mindset Badge */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-card border border-border-subtle">
              <div className="p-2 rounded-lg bg-accent-purple/10">
                <Bot size={20} className="text-accent-purple" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-1">
                  AI-First Mindset
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Actively leveraging AI co-pilots for code optimization,
                  automated workflows, and accelerated model development.
                </p>
              </div>
              <Badge variant="accent" className="shrink-0 mt-0.5">
                Core Value
              </Badge>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group relative p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-magenta/30 transition-all duration-500 hover:glow-magenta"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent-magenta/10 group-hover:bg-accent-magenta/20 transition-colors duration-300">
                      <Icon
                        size={18}
                        className="text-accent-magenta"
                      />
                    </div>
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
