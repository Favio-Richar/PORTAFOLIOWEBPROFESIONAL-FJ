"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* FONDO GLASS + GRADIENT + LUCES */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f0f] to-[#111] opacity-90" />

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/20 blur-[160px] rounded-full" />

      {/* CONTENIDO */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6 z-10">

        {/* TEXTOS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Desarrollador Full Stack
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-white mt-3">
            Hola, soy <br />
            <span className="text-primary">Favio Jiménez</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
            Creo soluciones tecnológicas modernas con arquitectura limpia, APIs escalables,
            sistemas empresariales, apps móviles y dashboards avanzados usando Python, FastAPI,
            NestJS, Next.js, Flutter y PostgreSQL.
          </p>

          {/* BADGES */}
          <div className="flex items-center gap-3 mt-8">
            <div className="px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold">
              +3 años de experiencia
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold">
              +12 proyectos creados
            </div>
          </div>

          {/* BOTONES */}
          <div className="flex gap-4 mt-10">
            <a href="#projects" className="btn-neon text-base px-6 py-3">
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="btn-neon !bg-transparent border border-primary text-primary hover:bg-primary/20 text-base px-6 py-3"
            >
              Contáctame
            </a>
          </div>

          {/* SKILLS LOGOS */}
          <div className="flex gap-6 mt-10 opacity-80">
            <Image src="/next.svg" width={40} height={40} alt="Next.js" />
            <Image src="/python.svg" width={40} height={40} alt="Python" />
            <Image src="/fastapi.svg" width={40} height={40} alt="FastAPI" />
            <Image src="/flutter.svg" width={40} height={40} alt="Flutter" />
            <Image src="/postgresql.svg" width={40} height={40} alt="PostgreSQL" />
          </div>
        </motion.div>

        {/* IMAGEN PROFESIONAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="relative glass rounded-[35px] p-4 shadow-2xl border border-white/10">
            <Image
              src="/img/the7.jpg" // CAMBIA AQUÍ TU FOTO REAL
              width={420}
              height={420}
              alt="Favio Jiménez"
              className="rounded-[30px] object-cover shadow-lg"
            />

            {/* LUZ DETRÁS */}
            <div className="absolute inset-0 rounded-[35px] bg-primary/30 blur-[90px] -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
