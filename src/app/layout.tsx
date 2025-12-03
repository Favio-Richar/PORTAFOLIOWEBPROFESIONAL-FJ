import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "../styles/portfolio.css"; // <-- ESTILO PREMIUM DARK + GLASS

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata general
export const metadata: Metadata = {
  title: "Portafolio – Favio Jiménez",
  description:
    "Portafolio profesional de Favio Jiménez: Desarrollador Full Stack con experiencia en Python, FastAPI, Next.js, PostgreSQL y Flutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark"> 
      {/* 🔥 ACTIVAMOS MODO OSCURO GLOBAL */}
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
          min-h-screen
          text-foreground
          bg-background
          selection:bg-primary/30 selection:text-white
        `}
      >
        {/* NAVBAR GLASS */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <main className="max-w-7xl mx-auto px-4 py-10">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
