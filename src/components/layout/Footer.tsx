"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 py-16 mt-32">
      
      {/* Glow decorativo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 blur-[140px] rounded-full opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-[140px] rounded-full opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center space-y-6">

        {/* Nombre */}
        <p className="text-2xl font-bold text-white tracking-tight">
          © {year} — Favio Jiménez
        </p>

        {/* Descripción */}
        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          Desarrollador Full Stack especializado en Python, FastAPI, Next.js, Flutter,
          Arquitecturas escalables y despliegues en VPS/Docker.
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mt-6">
          
          <a
            href="https://github.com/TU_USUARIO"
            target="_blank"
            className="text-gray-300 hover:text-primary transition-all hover:scale-110"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://linkedin.com/in/TU_USUARIO"
            target="_blank"
            className="text-gray-300 hover:text-primary transition-all hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="mailto:tucorreo@gmail.com"
            className="text-gray-300 hover:text-primary transition-all hover:scale-110"
          >
            <FaEnvelope size={28} />
          </a>

          <a
            href="https://instagram.com/TU_USUARIO"
            target="_blank"
            className="text-gray-300 hover:text-primary transition-all hover:scale-110"
          >
            <FaInstagram size={28} />
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="w-full h-px bg-white/10 my-6"></div>

        {/* Derechos reservados */}
        <p className="text-xs text-gray-500">
          Todos los derechos reservados. Desarrollado con Next.js, Tailwind y pasión por construir software moderno.
        </p>
      </div>
    </footer>
  );
}
