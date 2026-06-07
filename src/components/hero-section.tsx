"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-magenta/8 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-purple/8 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-accent-magenta/10 text-accent-magenta border border-accent-magenta/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-magenta opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-magenta" />
            </span>
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
        >
          <span className="text-text-primary">Ly Minh</span>{" "}
          <span className="gradient-text">Khang</span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-text-secondary tracking-wide"
        >
          Data Analytics{" "}
          <span className="text-accent-magenta mx-2">·</span> Credit Risk
          Modeling <span className="text-accent-magenta mx-2">·</span>{" "}
          AI-Assisted Workflows
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-4 text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Economic Mathematics senior bridging the gap between rigorous
          quantitative analysis and actionable fintech strategies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScrollTo("#projects")}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-magenta to-accent-purple text-white font-semibold text-sm hover:shadow-xl hover:shadow-accent-magenta/25 transition-all duration-300 hover:scale-105"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <a
            href="https://drive.google.com/file/d/1cZzN5PGczq1XVn8FF9Z-UFH9g6onlrkq/view?usp=sharing"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 text-text-primary font-semibold text-sm border border-border-subtle hover:border-accent-magenta/30 hover:bg-white/10 transition-all duration-300"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => handleScrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-magenta transition-colors cursor-pointer"
        aria-label="Scroll to About"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
