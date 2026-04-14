import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arya Waranggana — Frontend Engineer",
  description:
    "Frontend Engineer with almost 5 years of experience across IoT, POS, ERP, government, and e-commerce — building precision-crafted, scalable web applications with React, Vue, and Angular.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Angular",
    "Vue",
    "TypeScript",
    "Jakarta",
    "Indonesia",
  ],
  openGraph: {
    title: "Arya Waranggana — Frontend Engineer",
    description:
      "Precision-built. Pixel-perfect. Ship-ready. Frontend Engineer based in Jakarta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
