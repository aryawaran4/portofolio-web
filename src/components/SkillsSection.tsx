"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

const allSkills = Object.values(skills).flat();

// Three rows with different subsets + directions
const rows = [
  { items: allSkills.slice(0, 12), dir: "left" as const },
  { items: allSkills.slice(8, 20), dir: "right" as const },
  { items: allSkills.slice(16).concat(allSkills.slice(0, 8)), dir: "left" as const },
];

function MarqueeRow({ items, dir }: { items: string[]; dir: "left" | "right" }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee-track overflow-hidden py-2">
      <div className={dir === "left" ? "marquee-left" : "marquee-right"} style={{ display: "flex", gap: "0" }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-sm font-mono px-5 text-muted-foreground/60 hover:text-primary transition-colors duration-200 cursor-none whitespace-nowrap">
              {item}
            </span>
            <span className="text-primary/20 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-6">04 — Skills</p>
          <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tighter">
            TECHNOLOGIES &amp;<br />
            <span className="text-primary">TOOLS</span> I USE
          </h2>
        </motion.div>
      </div>

      {/* Full-bleed marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-1 mb-16"
      >
        {rows.map((row, i) => (
          <MarqueeRow key={i} items={row.items} dir={row.dir} />
        ))}
      </motion.div>

      {/* Categorised grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/25 transition-colors duration-200"
            >
              <p className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-3 pb-2 border-b border-border">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-150 cursor-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-4 bg-card border border-border rounded-xl p-5 flex flex-wrap items-center gap-6"
        >
          <p className="text-xs font-mono tracking-wider text-muted-foreground uppercase">Languages spoken</p>
          {[["Indonesian", "Native"], ["English", "Professional Working"], ["Japanese", "Elementary"]].map(([lang, level]) => (
            <div key={lang} className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">{lang}</span>
              <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded-full bg-muted">{level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
