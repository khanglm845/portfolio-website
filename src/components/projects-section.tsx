"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./section-heading";
import Badge from "./badge";

const projects = [
  {
    id: 1,
    title: "Comprehensive Fintech Credit Risk Analytics",
    description:
      "End-to-end credit risk analytics pipeline — from data warehousing with star-schema design to Expected Loss calculation using Markov-chain transition matrices and vintage analysis.",
    techStack: ["BigQuery", "SQL", "Markov-chain", "Expected Loss", "Python"],
    accent: "from-accent-magenta to-accent-purple",
    link: "https://github.com/khanglm845/portfolio-dashboard/blob/main/portfolio_dashboard.pdf",
  },
  {
    id: 2,
    title: "Behavioral Credit Scoring & Explainable AI",
    description:
      "Built a behavioral credit scoring model aligned with Basel III standards. Applied SMOTE for imbalanced data, compared ML classifiers, and integrated SHAP-based explainability for transparent risk decisions.",
    techStack: ["Scikit-learn", "SMOTE", "Basel III", "SHAP", "XAI"],
    accent: "from-accent-purple to-accent-blue",
    link: "https://github.com/khanglm845/credit-scoring-xai",
  },
  {
    id: 3,
    title: "Automated Credit Model Monitoring Pipeline",
    description:
      "Designed a production monitoring pipeline for credit models — tracking data drift (PSI/CSI), model performance degradation, and automated alerts with Power BI dashboards for stakeholders.",
    techStack: ["Data Drift", "PSI/CSI", "Power BI", "Python", "Automation"],
    accent: "from-accent-blue to-emerald-400",
    link: "https://github.com/khanglm845/psi-csi-monitoring",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-magenta/[0.02] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Featured Work"
          title="Projects & Case Studies"
          description="Real-world projects demonstrating expertise in credit risk analytics, machine learning, and automated model monitoring."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative flex flex-col p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-magenta/30 transition-all duration-500 hover:glow-magenta cursor-pointer"
            >
              {/* Project Number + Arrow */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
                >
                  Project 0{project.id}
                </span>
                <div className="p-2 rounded-full bg-white/5 text-text-muted group-hover:bg-accent-magenta/10 group-hover:text-accent-magenta transition-all duration-300">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:gradient-text transition-all duration-300 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Bottom gradient line */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
