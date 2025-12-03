"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProyectosHome() {
const projects = [
  {
    title: "SmartRent+ App",
    desc: "Aplicación móvil moderna para arriendos, ventas y perfiles. Construida con Flutter, NestJS, PostgreSQL y FastAPI.",
    img: "/img/25-oct-revista-768x432.jpg",
    tech: ["Flutter", "NestJS", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Mi Negocio Digital",
    desc: "Marketplace profesional para PYMEs con panel, pagos, catálogo y dashboard. Desarrollado con Next.js, NestJS y PostgreSQL.",
    img: "/img/the7.jpg",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    link: "#",
  },
  {
    title: "ERP Empresarial",
    desc: "Sistema completo para inventario, ventas, clientes, roles, permisos y analíticas. Arquitectura limpia y escalable.",
    img: "/img/ticslaboral.jpg",
    tech: ["FastAPI", "React", "Docker"],
    link: "#",
  },
];


  return (
    <section className="py-28 relative">
      <h2 className="section-title">Proyectos Destacados</h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="glass p-6 rounded-3xl shadow-xl border border-white/10 hover:shadow-primary/40 cursor-pointer group"
          >

            {/* IMAGEN / MOCKUP */}
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={p.img}
                alt={p.title}
                width={500}
                height={350}
                className="rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* TITULO */}
            <h3 className="text-2xl font-bold text-white mt-5">{p.title}</h3>

            {/* DESCRIPCIÓN */}
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              {p.desc}
            </p>

            {/* LISTA DE TECNOLOGÍAS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-primary/20 text-primary font-semibold rounded-full border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BOTÓN MÁS INFORMACIÓN */}
            <a
              href={p.link}
              className="btn-neon mt-6 inline-block text-sm px-4 py-2"
            >
              Ver Proyecto →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
