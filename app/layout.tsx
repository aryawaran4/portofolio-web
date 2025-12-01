import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aryawaranggana.com"),
  title: "Arya Waranggana Susilo | Frontend Engineer & Web Performance Specialist",
  description: "Frontend engineer specializing in performance optimization, SEO, and scalable UI architecture. 4+ years of experience across e-commerce, enterprise, and government systems.",
  keywords: ["frontend engineer", "react", "angular", "vue", "typescript", "web performance", "SEO optimization", "UI architecture"],
  authors: [{ name: "Arya Waranggana Susilo" }],
  creator: "Arya Waranggana Susilo",
  openGraph: {
    type: "website",
    url: "https://aryawaranggana.com",
    title: "Arya Waranggana Susilo | Frontend Engineer",
    description: "Frontend engineer specializing in performance optimization, SEO, and scalable UI architecture.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arya Waranggana Susilo - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Waranggana Susilo | Frontend Engineer",
    description: "Frontend engineer specializing in performance optimization, SEO, and scalable UI architecture.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://aryawaranggana.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arya Waranggana Susilo",
    url: "https://aryawaranggana.com",
    jobTitle: "Frontend Engineer",
    description: "Frontend engineer specializing in performance optimization, SEO, and scalable UI architecture.",
    image: "https://aryawaranggana.com/og-image.jpg",
    sameAs: [
      "https://linkedin.com/in/aryawaranggana",
      "https://github.com/aryawaranggana",
    ],
    knowsAbout: [
      "React",
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "Web Performance",
      "SEO Optimization",
      "UI Architecture",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
