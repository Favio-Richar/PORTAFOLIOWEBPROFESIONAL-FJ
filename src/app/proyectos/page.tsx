"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";
import { useState } from "react";

const proyectos = [
  {
    titulo: "SmartRent+",
    categoria: "Plataforma Empresarial",
    estado: "En Producción",
    version: "v3.2",
    descripcion:
      "Sistema completo de arriendos, ventas, publicaciones, pagos, notificaciones, chat, panel administrador, empresas, ERP Lite y app móvil con Flutter.",
    img: "/mockups/laptop.png",
    video: "/videos/smartrent_demo.mp4",
    demo: "https://nextlevelsoftwarepro.com",
    repo: "https://github.com/Favio-Richar",
    stack: [
      "Flutter",
      "FastAPI",
      "NestJS",
      "PostgreSQL",
      "Next.js",
      "Docker",
      "Microservicios",
    ],
  },
  {
    titulo: "Mi Negocio Digital",
    categoria: "ERP / CRM",
    estado: "En Desarrollo",
    version: "v1.7 Beta",
    descripcion:
      "ERP empresarial para PYMEs: inventario, ventas, roles, soporte, reportes, catálogo digital, automatización y analytics.",
    img: "/mockups/mobile.png",
    video: "/videos/mnd_promo.mp4",
    demo: "#",
    repo: "#",
    stack: ["Flutter", "NestJS", "Node.js", "PostgreSQL", "JWT", "Docker"],
  },
  {
    titulo: "ERP Empresarial Completo",
    categoria: "Sistema Corporativo",
    estado: "Producción Interna",
    version: "v2.0",
    descripcion:
      "ERP completo con módulos de inventario, facturación, clientes, proveedores, dashboards, seguridad avanzada, CI/CD y vista responsive.",
    img: "/mockups/erp_pro.png",
    video: "/videos/erp_demo.mp4",
    demo: "#",
    repo: "#",
    stack: ["React", "FastAPI", "PostgreSQL", "Docker", "CI/CD", "Grafana"],
  },
];

// ⭐ COMPONENTE PRINCIPAL
export default function ProyectosPage() {
  const [modalData, setModalData] = useState<any>(null);

  return (
    <>
      {/* MODAL DE DETALLES */}
      {modalData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center z-[200]"
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            className="bg-white/10 border border-white/20 p-8 rounded-3xl max-w-3xl w-full shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white">{modalData.titulo}</h2>
            <p className="text-blue-400">{modalData.categoria}</p>

            {/* VIDEO EN MODAL */}
            {modalData.video && (
              <video
                src={modalData.video}
                autoPlay
                loop
                muted
                className="rounded-xl mt-6 border border-white/10 shadow-xl"
              />
            )}

            <p className="text-gray-300 mt-4">{modalData.descripcion}</p>

            <h4 className="text-white font-semibold mt-6 mb-2">
              Tecnologías usadas:
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {modalData.stack.map((s: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30"
                >
                  {s}
                </span>
              ))}
            </div>

            <button
              onClick={() => setModalData(null)}
              className="px-6 py-2 mt-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* SECCIÓN PRINCIPAL */}
      <section className="relative max-w-7xl mx-auto px-6 py-32">
        {/* GLOW DECORATIVO */}
        <div className="absolute top-10 left-0 w-96 h-96 bg-primary/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full"></div>

        {/* TÍTULO */}
        <h1 className="text-5xl font-extrabold text-center text-white mb-4 tracking-tight">
          Proyectos Profesionales
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Aplicaciones móviles, sistemas empresariales, ERPs, APIs y plataformas
          web creadas con arquitectura profesional y tecnología moderna.
        </p>

        {/* GRID DE PROYECTOS */}
        <div className="grid gap-20 relative z-10">
          {proyectos.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                grid grid-cols-1 md:grid-cols-2 gap-10 items-center 
                bg-white/5 backdrop-blur-xl border border-white/10 
                shadow-xl rounded-3xl p-10 hover:shadow-primary/40
                hover:-translate-y-2 transition-all
              "
            >
              {/* IMAGEN */}
              <motion.div whileHover={{ scale: 1.03 }}>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/20 p-3">
                  <Image
                    src={p.img}
                    alt={p.titulo}
                    width={550}
                    height={380}
                    className="rounded-xl object-cover"
                  />
                </div>
              </motion.div>

              {/* INFORMACIÓN */}
              <div>
                <h2 className="text-3xl font-bold text-white">{p.titulo}</h2>

                <p className="text-sm text-blue-400">
                  {p.categoria} — {p.estado} · <span className="text-gray-300">{p.version}</span>
                </p>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {p.descripcion}
                </p>

                {/* TECNOLOGÍAS / STACK */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {p.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-xs rounded-full 
                        bg-primary/20 text-primary border border-primary/40
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BOTONES */}
                <div className="flex gap-4 mt-8 flex-wrap">
                  {/* DEMO */}
                  <a
                    href={p.demo}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-black font-semibold shadow-lg hover:bg-primary/80 transition-all"
                  >
                    <FaExternalLinkAlt /> Ver Demo
                  </a>

                  {/* REPO */}
                  <a
                    href={p.repo}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
                  >
                    <FaGithub /> Repositorio
                  </a>

                  {/* VER DETALLES (MODAL) */}
                  <button
                    onClick={() => setModalData(p)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 font-semibold hover:bg-blue-500/30 transition-all"
                  >
                    <FaPlayCircle /> Ver Detalles
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-24">
          <a
            href="/contacto"
            className="btn-neon px-10 py-4 text-lg"
          >
            ¿Quieres un proyecto como estos? Contáctame →
          </a>
        </div>
      </section>
    </>
  );
}
