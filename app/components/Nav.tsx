"use client";

import { useEffect, useState } from "react";

const links = ["Work", "Experience", "About", "Contact"] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const frosted = scrolled || menuOpen;

  return (
    <>
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
          backgroundColor: frosted ? "rgba(255,255,255,0.94)" : "transparent",
          borderBottom: frosted ? "1px solid #e4e4e4" : "1px solid transparent",
          backdropFilter: frosted ? "blur(10px)" : "none",
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
          <nav className="nav-desktop" aria-label="Primary navigation">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
            <span className="avail-badge" style={{ marginLeft: 4 }}>
              Available
            </span>
          </nav>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <nav
        className={`nav-mobile-menu${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <span className="avail-badge" style={{ marginTop: 28 }}>
          Available
        </span>
      </nav>
    </>
  );
}
