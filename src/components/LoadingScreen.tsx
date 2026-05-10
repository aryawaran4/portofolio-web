"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#08080F] flex items-center justify-center"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Top stripe */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-primary/40"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading font-black text-[clamp(5rem,18vw,14rem)] leading-none tracking-tighter text-primary"
            >
              AWS.
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm tracking-[0.4em] uppercase text-muted-foreground"
            >
              Frontend Engineer
            </motion.p>
          </div>

          {/* Bottom progress line */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
