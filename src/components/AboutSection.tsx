"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, stats, awards } from "@/lib/data";
import { Trophy } from "lucide-react";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const duration = 1600;
    const update = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 sm:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          {/* Left */}
          <div>
            <FadeUp>
              <p className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-6">01 — About</p>
              <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tighter text-foreground mb-8">
                TURNING COMPLEX<br />
                <span className="text-primary">SYSTEMS</span> INTO<br />
                CLEAN UIs.
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                {personalInfo.summary}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                I&apos;ve shipped real-time IoT dashboards for government utilities, a multi-market POS
                platform serving 100+ merchants across Singapore, Indonesia &amp; Taiwan, and
                digital experiences for Japanese enterprise giants including ANA, SMBC, and MUFG.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Fluent in English and Indonesian, elementary Japanese. I function best in teams that
                care about quality, but I can solo a full product from design to production when needed.
              </p>
            </FadeUp>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 5, suffix: "", label: "Years Experience" },
                { value: 3, suffix: "", label: "Companies" },
                { value: 13, suffix: "+", label: "Projects Delivered" },
                { value: 3, suffix: "", label: "Countries Served" },
              ].map((stat, i) => (
                <FadeUp key={stat.label} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                    <div className="font-heading font-black text-[2.8rem] leading-none text-primary mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Awards */}
            <FadeUp delay={0.3}>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
                  <Trophy className="h-3.5 w-3.5 text-primary" />
                  Recognition
                </div>
                {awards.map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/25 transition-colors duration-200"
                  >
                    <div className="text-xl font-heading font-black text-primary/30 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{award.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {award.org} &middot; {award.year}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-0.5">{award.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
