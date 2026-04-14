"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );

    const targets = sectionRef.current?.querySelectorAll(
      ".reveal-fade, .reveal-slide",
    );
    targets?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        backgroundColor: "#111",
        borderTop: "3px solid #c0392b",
        padding: "96px 0 56px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Circuit overlay */}
      <div
        className="circuit-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          pointerEvents: "none",
        }}
        aria-hidden
      />

      <div className="container" style={{ position: "relative" }}>
        <div className="contact-grid">
          {/* Left — headline */}
          <div>
            <span
              className="eyebrow reveal-slide"
              style={{
                display: "block",
                marginBottom: 24,
                color: "rgba(192,57,43,0.8)",
              }}
            >
              Get in Touch
            </span>
            <h2
              className="reveal-fade"
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Let&apos;s build something{" "}
              <span style={{ color: "#c0392b" }}>worth shipping</span>.
            </h2>
            <p
              className="reveal-fade"
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                maxWidth: 400,
              }}
            >
              I&apos;m open to frontend engineering roles, freelance projects,
              and collaborations. If you&apos;ve got something interesting —
              let&apos;s talk.
            </p>
          </div>

          {/* Right — contact options */}
          <div
            className="reveal-fade"
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <a
              href="mailto:aryawaranggana.susilo@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                textDecoration: "none",
                transition: "border-color 0.2s ease, background 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(192,57,43,0.5)";
                e.currentTarget.style.background = "rgba(192,57,43,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Email
                </p>
                <p style={{ fontSize: 14, fontWeight: 300, color: "#fff" }}>
                  aryawaranggana.susilo@gmail.com
                </p>
              </div>
              <span style={{ color: "#c0392b", fontSize: 16 }}>→</span>
            </a>

            <a
              href="tel:+6285372727292"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                textDecoration: "none",
                transition: "border-color 0.2s ease, background 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(192,57,43,0.5)";
                e.currentTarget.style.background = "rgba(192,57,43,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Phone
                </p>
                <p style={{ fontSize: 14, fontWeight: 300, color: "#fff" }}>
                  +62 853 7272 7292
                </p>
              </div>
              <span style={{ color: "#c0392b", fontSize: 16 }}>→</span>
            </a>

            <a
              href="https://github.com/aryawaran4"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                textDecoration: "none",
                transition: "border-color 0.2s ease, background 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(192,57,43,0.5)";
                e.currentTarget.style.background = "rgba(192,57,43,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Github
                </p>
                <p style={{ fontSize: 14, fontWeight: 300, color: "#fff" }}>
                  https://github.com/aryawaran4
                </p>
              </div>
              <span style={{ color: "#c0392b", fontSize: 16 }}>↗</span>
            </a>
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 300,
              color: "rgba(255,255,255,0.2)",
            }}
          >
            © 2025 Arya Waranggana Susilo
          </span>

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
              width: 20,
              height: 12,
              borderRadius: 2,
              background: "linear-gradient(to bottom, #FF0000 50%, #FFFFFF 50%)",
              display: "inline-block",
              }}
            />
            <span
              style={{
              fontSize: 12,
              fontWeight: 300,
              color: "rgba(255,255,255,0.2)",
              }}
            >
              Indonesia
            </span>
            </div>
        </div>
      </div>
    </section>
  );
}
