"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowDownRight, MapPin } from "lucide-react";

const nameWords = ["ARYA", "WARANGGANA", "SUSILO"];

function WordReveal({ word, delay }: { word: string; delay: number }) {
  return (
    <div className="overflow-hidden leading-[0.85]">
      <motion.span
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {word}
      </motion.span>
    </div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="blob absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="blob blob-delay-2 absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-500/6 blur-[100px]" />
        <div className="blob blob-delay-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[80px]" />
      </div>

      {/* Diagonal grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pt-28 pb-20"
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.05 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/8 text-sm font-medium text-primary mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for new opportunities
        </motion.div>

        {/* HUGE name */}
        <h1 className="font-heading font-black text-[clamp(3.5rem,11vw,9rem)] tracking-tighter text-foreground mb-8">
          {nameWords.map((word, i) => (
            <WordReveal key={word} word={word} delay={2.1 + i * 0.15} />
          ))}
        </h1>

        {/* Role + location row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.6 }}
          >
            <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-muted-foreground font-medium">
              {personalInfo.role}
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground/60">
              <MapPin className="h-3.5 w-3.5" />
              {personalInfo.location}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.7 }}
            className="max-w-sm text-sm sm:text-base text-muted-foreground leading-relaxed text-right hidden sm:block"
          >
            {personalInfo.tagline}
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <a
            href="#experience"
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-heading font-bold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 hover:scale-105 cursor-none"
          >
            View My Work
            <ArrowDownRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-3 px-8 py-4 border border-border rounded-full font-heading font-bold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-none"
          >
            Get in Touch
            <ArrowDownRight className="h-4 w-4 rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Tech tags row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="flex flex-wrap gap-2 mt-14"
        >
          {["Angular", "React", "Vue", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "REST API"].map((t) => (
            <span key={t} className="text-xs font-mono text-muted-foreground/50 px-3 py-1 border border-border/50 rounded-full">
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground/40">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
