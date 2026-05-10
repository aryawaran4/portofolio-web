"use client";

import { personalInfo } from "@/lib/data";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useRef, useState } from "react";

function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 20 });
  const springY = useSpring(y, { stiffness: 350, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-heading font-black text-lg tracking-tight hover:bg-primary/90 transition-colors duration-200 cursor-none"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

function CopyableEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="group flex items-center gap-3 text-left cursor-none"
      aria-label="Copy email"
    >
      <span className="font-heading font-black text-[clamp(1rem,2.5vw,1.5rem)] text-muted-foreground group-hover:text-foreground transition-colors duration-200 tracking-tight break-all">
        {personalInfo.email}
      </span>
      <motion.div
        animate={{ scale: copied ? [1, 1.3, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        {copied ? (
          <Check className="h-5 w-5 text-primary shrink-0" />
        ) : (
          <Copy className="h-5 w-5 text-muted-foreground/40 group-hover:text-primary shrink-0 transition-colors" />
        )}
      </motion.div>
    </button>
  );
}

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-primary mb-6">
            05 — Contact
          </p>
          <h2 className="font-heading font-black text-[clamp(3rem,7vw,6rem)] leading-[0.85] tracking-tighter">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-primary">GREAT.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Open to full-time Frontend Engineer roles, contract work, or
              interesting collaborations. If you&apos;re building something
              ambitious, let&apos;s talk.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              {personalInfo.location} &mdash; open to remote
            </div>

            <CopyableEmail />

            <MagneticButton href={`mailto:${personalInfo.email}`}>
              <Mail className="h-5 w-5" />
              Get in Touch
            </MagneticButton>
          </motion.div>

          {/* Right — link cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-3"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
              },
              {
                icon: ExternalLink,
                label: "GitHub",
                value: "github.com/aryawaran4",
                href: personalInfo.github,
              },
              {
                icon: ExternalLink,
                label: "LinkedIn",
                value: "linkedin.com/in/aryawarangganasusilo",
                href: personalInfo.linkedin,
              },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={
                  label === "GitHub" || label === "LinkedIn"
                    ? "_blank"
                    : undefined
                }
                rel={
                  label === "GitHub" || label === "LinkedIn"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors duration-200 cursor-none group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono tracking-wider uppercase text-muted-foreground">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground truncate mt-0.5">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-28 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/50">
        <p className="font-mono">
          Built with <span className="text-primary">Next.js</span> ·{" "}
          <span className="text-primary">Framer Motion</span> ·{" "}
          <span className="text-primary">Lenis</span> ·{" "}
          <span className="text-primary">shadcn/ui</span>
        </p>
        <p className="font-mono">
          © {new Date().getFullYear()} Arya Waranggana Susilo
        </p>
      </div>
    </section>
  );
}
