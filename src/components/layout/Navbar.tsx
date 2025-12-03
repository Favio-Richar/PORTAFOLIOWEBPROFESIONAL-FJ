"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/blog", label: "Blog" },
    { href: "/clientes", label: "Clientes" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-3xl font-black text-blue-600 tracking-tight">
          FJDev
        </Link>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* LINKS */}
        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex items-center gap-8 text-lg font-medium`}
        >
          {links.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/admin"
            className="text-blue-600 font-bold hover:text-blue-700 transition"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
