"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { projects } from "@/lib/data";

function TiltCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="perspective"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group bg-card border border-border rounded-2xl p-6 flex flex-col h-full hover:border-primary/30 cursor-none relative overflow-hidden transition-shadow duration-300 hover:shadow-xl"
      >
        {/* Mouse-following glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, oklch(0.723 0.219 142.5 / 0.08), transparent 60%)`,
          }}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <span className="text-xs font-mono text-primary/80 uppercase tracking-wider border border-primary/25 bg-primary/8 px-2.5 py-1 rounded-full">
            {project.type}
          </span>
          <span className="text-xs font-mono text-muted-foreground/50 shrink-0">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-black text-xl sm:text-2xl leading-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Highlight pill */}
        <div className="flex items-center gap-2 mb-5">
          <div className="h-1 w-1 rounded-full bg-primary" />
          <span className="text-xs font-semibold text-primary">{project.highlight}</span>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground/70">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-6">03 — Projects</p>
          <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tighter">
            5 YEARS OF<br />
            <span className="text-primary">PRODUCTION</span> WORK
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <TiltCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
