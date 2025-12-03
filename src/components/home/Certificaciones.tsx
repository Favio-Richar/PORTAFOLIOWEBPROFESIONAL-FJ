"use client";

import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaPython, FaDocker, FaMobileAlt } from "react-icons/fa";
import { SiFastapi, SiNextdotjs } from "react-icons/si";

/* ==========================================
   MAPA DE CLASES ESTÁTICAS (TAILWIND SAFE)
========================================== */
const glowColors: Record<string, string> = {
  blue: "bg-blue-500/20",
  indigo: "bg-indigo-500/20",
  emerald: "bg-emerald-500/20",
  sky: "bg-sky-500/20",
  gray: "bg-gray-500/20",
  yellow: "bg-yellow-500/20",
};

/* ==========================================
   CERTIFICACIONES
========================================== */
const certs = [
  {
    name: "Desarrollo Web Moderno",
    desc: "Arquitectura limpia, UI/UX, SSR, componentes reutilizables.",
    icon: <FaCode className="text-blue-400 text-4xl" />,
    level: "Avanzado",
    color: "blue",
  },
  {
    name: "Bases de Datos PostgreSQL",
    desc: "Diseño de modelos, consultas optimizadas, índices y vistas.",
    icon: <FaDatabase className="text-indigo-400 text-4xl" />,
    level: "Intermedio",
    color: "indigo",
  },
  {
    name: "APIs con FastAPI",
    desc: "JWT, OAuth2, documentación OpenAPI, servicios escalables.",
    icon: <SiFastapi className="text-emerald-400 text-4xl" />,
    level: "Avanzado",
    color: "emerald",
  },
  {
    name: "Flutter Avanzado",
    desc: "Apps móviles completas con arquitectura limpia y Provider/BLoC.",
    icon: <FaMobileAlt className="text-sky-400 text-4xl" />,
    level: "Intermedio",
    color: "sky",
  },
  {
    name: "Fundamentos de Docker",
    desc: "Contenedores, imágenes, volúmenes, redes y servicios.",
    icon: <FaDocker className="text-blue-500 text-4xl" />,
    level: "Intermedio",
    color: "blue",
  },
  {
    name: "Next.js & React",
    desc: "SSR, ISR, API routes, optimización de rendimiento.",
    icon: <SiNextdotjs className="text-white text-4xl" />,
    level: "Avanzado",
    color: "gray",
  },
  {
    name: "Python Profesional",
    desc: "Automatización, scripting avanzado, POO, data processing.",
    icon: <FaPython className="text-yellow-400 text-4xl" />,
    level: "Experto",
    color: "yellow",
  },
];

/* ==========================================
   COMPONENTE PRINCIPAL
========================================== */
export default function Certificaciones() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32">

      {/* Glow general */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/20 blur-[160px] rounded-full"></div>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-primary text-center mb-4"
      >
        Certificaciones y Formación
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-400 max-w-2xl mx-auto text-lg mb-16"
      >
        Formación continua que respalda las habilidades técnicas utilizadas en proyectos reales.
      </motion.p>

      {/* Grid profesional */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 relative z-10">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.06 }}
            className="
              group relative p-8 rounded-3xl 
              bg-white/5 backdrop-blur-xl border border-white/10 
              shadow-xl cursor-pointer overflow-hidden transition-all
            "
          >
            {/* GLOW seguro para Tailwind */}
            <div
              className={`
                absolute inset-0 opacity-0 group-hover:opacity-30 
                ${glowColors[c.color]}
                blur-2xl transition-all duration-500
              `}
            />

            {/* Icono */}
            <div className="relative z-10 flex justify-center mb-4 group-hover:scale-110 transition-all">
              {c.icon}
            </div>

            {/* Nombre */}
            <h3 className="text-xl font-bold text-white text-center relative z-10">
              {c.name}
            </h3>

            {/* Descripción */}
            <p className="mt-3 text-gray-400 text-sm text-center relative z-10">
              {c.desc}
            </p>

            {/* Badge */}
            <span className="
              mt-5 block text-center mx-auto w-fit
              text-xs font-medium px-4 py-1
              bg-primary/20 text-primary border border-primary/40
              rounded-full relative z-10
            ">
              {c.level}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
