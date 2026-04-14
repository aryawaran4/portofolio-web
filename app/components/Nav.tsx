"use client";

import { useEffect, useState } from "react";

const links = ["Work", "Experience", "About", "Contact"] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        display: "flex",
        alignItems: "center",
        backgroundColor: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
        borderBottom: scrolled ? "1px solid #e4e4e4" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition:
          "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontWeight: 500,
            fontSize: 15,
            color: "#1a1a1a",
            textDecoration: "none",
            letterSpacing: "0.04em",
            lineHeight: 1,
          }}
        >
          AWS<span style={{ color: "#c0392b" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", gap: 28, alignItems: "center" }}
          aria-label="Primary navigation"
        >
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
