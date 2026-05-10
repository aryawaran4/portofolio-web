"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/data";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Number */}
      <div
        className="absolute -top-4 right-6 font-heading font-black text-[7rem] leading-none opacity-[0.04] select-none pointer-events-none"
        style={{ color: exp.color }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        className="bg-card border border-border rounded-2xl overflow-hidden hover:border-border/60 transition-all duration-300 cursor-none"
        style={{ boxShadow: expanded ? `0 0 40px ${exp.color}10` : "none" }}
      >
        {/* Header — always visible */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-7 sm:p-8 cursor-none"
          aria-expanded={expanded}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: exp.color }} />
                <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">{exp.duration}</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-foreground tracking-tight">
                {exp.company}
              </h3>
              <p className="text-base font-medium mt-1" style={{ color: exp.color }}>
                {exp.title}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                  <Calendar className="h-3 w-3" />{exp.period}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                  <MapPin className="h-3 w-3" />{exp.location}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0 mt-1"
            >
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="px-7 sm:px-8 pb-8 space-y-6">
                <div className="w-full h-px bg-border" />

                <ul className="space-y-3">
                  {exp.highlights.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.06, duration: 0.4 }}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="shrink-0 mt-2 h-1 w-4 rounded-full" style={{ backgroundColor: exp.color + "80" }} />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-border bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 sm:px-10 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-6">02 — Experience</p>
          <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tighter">
            WHERE I&apos;VE WORKED<br />
            &amp; <span className="text-primary">WHAT I SHIPPED</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
