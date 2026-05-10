import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arya Waranggana Susilo — Frontend Engineer",
  description:
    "Frontend Engineer with ~5 years building scalable frontends across IoT, POS, ERP, and e-commerce using React, Vue, and Angular.",
  openGraph: {
    title: "Arya Waranggana Susilo — Frontend Engineer",
    description: "Building scalable frontends across POS, IoT, ERP, and e-commerce for 5 years.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
