"use client";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaAngular,
} from "react-icons/fa";

import {
  SiFastapi,
  SiFlutter,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiSass,
} from "react-icons/si";

export default function Tecnologias() {
  const tech = [
    { name: "Python", icon: <FaPython size={50} className="text-yellow-500" /> },
    { name: "FastAPI", icon: <SiFastapi size={50} className="text-emerald-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript size={50} className="text-blue-500" /> },
    { name: "React", icon: <FaReact size={50} className="text-sky-400" /> },
    { name: "Flutter", icon: <SiFlutter size={50} className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={50} className="text-indigo-400" /> },

    // ✅ ícono corregido
    { name: "SQL Server", icon: <FaDatabase size={50} className="text-red-500" /> },

    { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
    { name: "SCSS", icon: <SiSass size={50} className="text-pink-400" /> },
    { name: "Angular", icon: <FaAngular size={50} className="text-red-600" /> },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#0b0b0b]">

      {/* GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/10 blur-[180px] rounded-full"></div>

      <h2 className="text-5xl font-extrabold mb-6 text-center text-white">
        Tecnologías Que Domino
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto text-lg mb-14">
        Stack moderno, escalable y usado en proyectos reales de alto rendimiento.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto px-8">

        {tech.map((t, i) => (
          <div
            key={i}
            className="
              group relative
              flex flex-col items-center justify-center
              p-6 rounded-2xl
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-xl hover:border-primary/40 hover:shadow-primary/30
              hover:-translate-y-1 transition-all duration-300
            "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-primary blur-2xl rounded-2xl transition"></div>

            <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
              {t.icon}
            </div>

            <p className="mt-4 font-semibold text-gray-300 group-hover:text-primary transition-colors duration-300 z-10">
              {t.name}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
