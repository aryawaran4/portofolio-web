"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 600, damping: 40 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const trailX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const trailY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    const handleHover = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (e.type === "mouseenter") setHovering(true);
      else setHovering(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    // Re-query on DOM changes
    const addListeners = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleHover);
      });
    };
    addListeners();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full hidden md:block"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          border: "1px solid oklch(0.723 0.219 142.5 / 0.4)",
          opacity: visible ? 1 : 0,
          transition: "width 0.3s, height 0.3s, opacity 0.2s",
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 8 : 6,
          height: hovering ? 8 : 6,
          backgroundColor: "oklch(0.723 0.219 142.5)",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, opacity 0.2s",
        }}
      />
    </>
  );
}
