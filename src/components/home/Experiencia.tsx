"use client";

import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaTools, 
  FaNetworkWired, 
  FaRobot, 
  FaDatabase 
} from "react-icons/fa";

export default function Experiencia() {
  const exp = [
    {
      icon: <FaLaptopCode className="text-primary text-4xl" />,
      cargo: "Desarrollador Full Stack",
      empresa: "Proyectos Freelance",
      año: "2022 - Actualidad",
      desc:
        "Desarrollo de aplicaciones web, móviles y APIs con Python, FastAPI, Next.js, Flutter, PostgreSQL y Docker. Implementación de arquitecturas escalables, despliegue en VPS Linux, CI/CD, optimización de rendimiento y diseño UI/UX moderno.",
      skills: ["FastAPI", "Next.js", "Flutter", "PostgreSQL", "Docker", "VPS Linux"],
    },
    {
      icon: <FaRobot className="text-sky-400 text-4xl" />,
      cargo: "Automatización y Procesos",
      empresa: "Práctica Profesional – TI",
      año: "2023",
      desc:
        "Automatización de flujos empresariales con Power Automate, integración con correo corporativo, SharePoint y bases de datos. Creación de bots de automatización y scripts en Python para extracción/limpieza de datos.",
      skills: ["Power Automate", "Python", "SharePoint", "Automatización"],
    },
    {
      icon: <FaDatabase className="text-red-500 text-4xl" />,
      cargo: "Analista de Datos / SQL Server",
      empresa: "Práctica Profesional – Área TI",
      año: "2023",
      desc:
        "Administración de SQL Server, creación de vistas, procedimientos almacenados, consultas optimizadas, triggers, respaldos y mantenimiento preventivo. Integraciones con sistemas internos corporativos.",
      skills: ["SQL Server", "Consultas", "Optimización", "Procedimientos"],
    },
    {
      icon: <FaTools className="text-yellow-400 text-4xl" />,
      cargo: "Soporte TI / Técnico Informático",
      empresa: "PYMEs en Chile",
      año: "2021 - 2022",
      desc:
        "Instalación y configuración de sistemas, mantenimiento preventivo, reparación de equipos, instalación de software corporativo, Office, Windows, antivirus y redes empresariales.",
      skills: ["Windows", "Office", "Hardware", "Drivers", "Antivirus"],
    },
    {
      icon: <FaNetworkWired className="text-green-500 text-4xl" />,
      cargo: "Redes y Telecomunicaciones",
      empresa: "Servicios Técnicos TI",
      año: "2021 - Actualidad",
      desc:
        "Instalación de redes, routers, cableado estructurado, configuración de VLAN, WiFi empresarial y dispositivos IoT. Diagnóstico y solución de problemas de conectividad.",
      skills: ["Redes", "Cableado", "Routers", "IoT"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mt-32 relative">
      
      {/* Glow decorativo */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-primary/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[200px] rounded-full"></div>

      {/* Título */}
      <h2 className="text-5xl font-extrabold text-white text-center mb-16 tracking-tight">
        Experiencia Profesional
      </h2>

      {/* Tarjetas de experiencia */}
      <div className="flex flex-col gap-10 relative">
        {exp.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-primary/40 hover:shadow-primary/30 transition-all"
          >
            
            {/* ICONO */}
            <div className="flex items-center gap-4">
              <div className="p-4 bg-black/20 rounded-2xl">{e.icon}</div>

              <div>
                <h3 className="text-2xl font-bold text-white">{e.cargo}</h3>
                <p className="text-primary font-semibold">
                  {e.empresa} — {e.año}
                </p>
              </div>
            </div>

            {/* DESCRIPCIÓN */}
            <p className="text-gray-300 mt-5 leading-relaxed">{e.desc}</p>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3 mt-5">
              {e.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-primary/20 text-primary border border-primary/30 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
