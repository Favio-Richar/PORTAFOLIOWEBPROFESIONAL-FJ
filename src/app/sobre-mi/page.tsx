"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Icons
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaGraduationCap,
  FaRocket,
  FaLaptopCode,
  FaTools,
  FaUserTie,
  FaCheckCircle,
  FaCode,
  FaBrain,
} from "react-icons/fa";

import {
  SiFastapi,
  SiNextdotjs,
  SiFlutter,
  SiPostgresql,
  SiTypescript,
  SiDocker,
  SiLinux,
  SiGithub,
} from "react-icons/si";

export default function SobreMi() {
  // =============================
  // SKILLS TÉCNICAS
  // =============================
  const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-400 text-3xl" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-emerald-400 text-3xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-3xl" /> },
    { name: "Flutter", icon: <SiFlutter className="text-sky-400 text-3xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-400 text-3xl" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500 text-3xl" /> },
    { name: "Linux / VPS", icon: <SiLinux className="text-orange-400 text-3xl" /> },
  ];

  // =============================
  // ESTUDIANDO ACTUALMENTE
  // =============================
  const studying = [
    "Arquitectura de Software",
    "Microservicios con Python / Node",
    "Docker + Kubernetes",
    "CI/CD con GitHub Actions",
    "Optimización avanzada Next.js",
    "Seguridad informática y hardening",
    "Automatización empresarial con Python",
    "Administración avanzada PostgreSQL",
  ];

  // =============================
  // SOFT SKILLS
  // =============================
  const softSkills = [
    "Resolución de problemas",
    "Pensamiento lógico",
    "Adaptabilidad",
    "Responsabilidad profesional",
    "Trabajo en equipo",
    "Comunicación clara",
    "Atención al detalle",
  ];

  // =============================
  // TIMELINE PROFESIONAL
  // =============================
  const timeline = [
    {
      year: "2021",
      title: "Inicio en TI",
      desc: "Soporte técnico, redes, automatización y primeros proyectos reales.",
    },
    {
      year: "2022",
      title: "Desarrollador Freelance",
      desc: "Clientes reales, apps móviles, APIs y plataformas web.",
    },
    {
      year: "2023",
      title: "Especialización Full Stack",
      desc: "FastAPI, Next.js, PostgreSQL, Docker, arquitectura limpia.",
    },
    {
      year: "2024 – Actualidad",
      title: "Desarrollador Full Stack Independiente",
      desc: "Sistemas empresariales, ERP, automatización, microservicios.",
    },
  ];

  // =============================
  // LOGROS REALES / DESTACADOS
  // =============================
  const achievements = [
    "Más de 20 proyectos desarrollados entre web, móvil y APIs.",
    "ERP propio implementado para PYMEs.",
    "Aplicaciones móviles publicadas en formato APK.",
    "Migraciones exitosas a VPS Linux (Ubuntu 24.04).",
    "Optimización de sistemas empresariales reduciendo tiempos en +60%.",
  ];

  // =============================
  // SETUP DE TRABAJO
  // =============================
  const setup = [
    "Laptop i7 / 16GB RAM",
    "Monitor Secundario 27” 144Hz",
    "Teclado Mecánico Redragon",
    "Servidor VPS Ubuntu 24.04",
    "GitHub + GitHub Actions",
    "Docker + Docker Compose",
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32">

      {/* ------------------- DECORACIÓN ------------------- */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-primary/30 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/20 blur-[180px] rounded-full"></div>

      {/* ------------------- ENCABEZADO ------------------- */}
      <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/img/favio_perfil.jpg"
            width={260}
            height={260}
            alt="Favio Jiménez"
            className="rounded-3xl border-2 border-white/20 shadow-xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-extrabold text-primary">Sobre mí</h2>

          <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-xl">
            Soy <span className="text-white font-bold">Favio Jiménez</span>, desarrollador Full Stack especializado en aplicaciones modernas, escalables y de alto rendimiento.  
            Trabajo con empresas, PYMEs y startups creando soluciones reales y profesionales.
          </p>

          <p className="text-gray-400 mt-4">
            Me enfoco en **arquitectura limpia**, rendimiento, diseño profesional y automatización empresarial.
          </p>
        </motion.div>
      </div>

      {/* ------------------- VIDEO PRESENTACIÓN ------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <video
          className="w-full rounded-3xl"
          src="/videos/presentacion.mp4"
          autoPlay
          muted
          loop
        />
      </motion.div>

      {/* ------------------- LO QUE HAGO ------------------- */}
      <h3 className="text-3xl text-white font-bold mt-24 mb-10">Lo que hago</h3>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <FaLaptopCode className="text-primary text-5xl" />,
            title: "Desarrollo Web",
            desc: "Sitios modernos, paneles administrativos, dashboards y aplicaciones con Next.js.",
          },
          {
            icon: <FaMobileAlt className="text-primary text-5xl" />,
            title: "Apps Mobile",
            desc: "Aplicaciones móviles profesionales con Flutter + backend propio.",
          },
          {
            icon: <FaServer className="text-primary text-5xl" />,
            title: "Backends / APIs",
            desc: "FastAPI, PostgreSQL, autenticación, seguridad y despliegue en VPS.",
          },
        ].map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-lg"
          >
            <div className="mb-4">{c.icon}</div>
            <h3 className="text-xl text-white font-bold">{c.title}</h3>
            <p className="text-gray-400 mt-2">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ------------------- SKILLS ------------------- */}
      <h3 className="text-3xl text-white font-bold mt-24 mb-8">Tecnologías que domino</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06 }}
            className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl"
          >
            {s.icon}
            <span className="text-gray-200">{s.name}</span>
          </motion.div>
        ))}
      </div>

      {/* ------------------- ESTUDIANDO ------------------- */}
      <h3 className="text-3xl text-white font-bold mt-24 mb-5">Actualmente estudiando</h3>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
        {studying.map((item, i) => (
          <li key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
            • {item}
          </li>
        ))}
      </ul>

      {/* ------------------- SOFT SKILLS ------------------- */}
      <h3 className="text-3xl text-white font-bold mt-24 mb-5">Habilidades profesionales</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {softSkills.map((s, i) => (
          <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 text-gray-300">
            {s}
          </div>
        ))}
      </div>

      {/* ------------------- TIMELINE ------------------- */}
      <h3 className="text-3xl text-white font-bold mt-24 mb-10">Trayectoria Profesional</h3>

      <div className="space-y-10 border-l border-white/20 pl-10">
        {timeline.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="absolute -left-4 top-1 w-3 h-3 bg-primary rounded-full"></span>

            <h4 className="text-white font-bold text-xl">{t.year}</h4>
            <p className="text-primary font-semibold">{t.title}</p>
            <p className="text-gray-400">{t.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ------------------- EDUCACIÓN ------------------- */}
      <h3 className="text-3xl text-white font-bold mt-24 mb-6">Educación</h3>

      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 shadow-xl">
        <div className="flex items-center gap-4">
          <FaGraduationCap className="text-primary text-4xl" />
          <div>
            <h4 className="text-xl text-white font-bold">Ingeniería Informática</h4>
            <p className="text-gray-400">Instituto Profesional — Chile</p>
          </div>
        </div>
      </div>

      {/* ------------------- LOGROS ------------------- */}
      <h3 className="text-3xl text-white font-bold mt-24 mb-5">Logros Destacados</h3>

      <ul className="space-y-3 text-gray-300">
        {achievements.map((a, i) => (
          <li key={i} className="flex items-center gap-3">
            <FaCheckCircle className="text-primary" />
            {a}
          </li>
        ))}
      </ul>

      {/* ------------------- SETUP ------------------- */}
      <h3 className="text-3xl text-white font-bold mt-24 mb-5">Mi Setup de Trabajo</h3>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
        {setup.map((s, i) => (
          <li key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
            • {s}
          </li>
        ))}
      </ul>

      {/* ------------------- FILOSOFÍA ------------------- */}
      <h3 className="text-3xl text-white font-bold mt-24 mb-5">Mi filosofía de desarrollo</h3>

      <p className="text-gray-300 max-w-3xl">
        Creo en el desarrollo simple, escalable y mantenible.  
        Un buen software no solo funciona: **evoluciona**, se adapta y crece con el negocio.  
        Mi enfoque está en entregar soluciones reales con diseño moderno y rendimiento profesional.
      </p>

      {/* ------------------- CTA FINAL ------------------- */}
      <div className="text-center mt-20">
        <a
          href="/contacto"
          className="btn-neon px-10 py-4 text-lg"
        >
          Trabajemos juntos →
        </a>
      </div>

    </section>
  );
}
