"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiciosHome() {
  const servicios = [
    // ======================
    // Desarrollo Software
    // ======================
    {
      icon: "/img/webdev.jpg",
      title: "Desarrollo Web Profesional",
      desc: "Sitios y sistemas modernos con Next.js, React, Tailwind y arquitectura limpia.",
      features: [
        "SEO avanzado",
        "SSR/ISR",
        "Paneles administrativos",
        "Dashboards empresariales"
      ]
    },
    {
      icon: "/img/mobile.jpg",
      title: "Apps Móviles",
      desc: "Aplicaciones en Flutter listas para Play Store y App Store.",
      features: [
        "Autenticación segura",
        "UI/UX fluida",
        "Notificaciones push",
        "APIs conectadas"
      ]
    },
    {
      icon: "/img/backend.jpg",
      title: "APIs & Backend",
      desc: "Sistemas escalables con FastAPI, NestJS y PostgreSQL.",
      features: [
        "JWT/OAuth2",
        "ORM profesional",
        "Microservicios",
        "Documentación OpenAPI"
      ]
    },
    {
      icon: "/img/devops.jpg",
      title: "DevOps / VPS & Docker",
      desc: "Despliegue, seguridad y pipelines de CI/CD.",
      features: [
        "Docker",
        "Nginx + SSL",
        "Monitoreo",
        "Automatizaciones"
      ]
    },

    // ======================
    // Soporte Tecnico
    // ======================
    {
      icon: "/img/support.jpg",
      title: "Soporte Informático",
      desc: "Asistencia remota y presencial para empresas y usuarios.",
      features: [
        "Configuración de equipos",
        "Resolución de errores",
        "Optimización de rendimiento",
        "Instalación de drivers"
      ]
    },
    {
      icon: "/img/maintenance.jpg",
      title: "Mantenimiento Preventivo",
      desc: "Limpieza, diagnóstico y mejora del rendimiento.",
      features: [
        "Limpieza interna",
        "Cambio de pasta térmica",
        "Optimización de software",
        "Eliminación de virus"
      ]
    },

    // ======================
    // Servicios faltantes (TEMPORALES HASTA QUE SUBAS ICONOS)
    // ======================
    {
      icon: "/img/the7.jpg", // temporal
      title: "Instalación de Software / Office",
      desc: "Instalación y activación profesional de Office, Windows y antivirus.",
      features: [
        "Office 365 / 2021",
        "Windows 10 / 11",
        "Antivirus Pro",
        "Programas esenciales"
      ]
    },
    {
      icon: "/img/ticslaboral.jpg", // temporal
      title: "Redes y Cableado",
      desc: "Instalación, configuración y optimización de redes.",
      features: [
        "Router y WiFi",
        "Cableado estructurado",
        "VPN",
        "Cámaras y dispositivos IoT"
      ]
    },
  ];

  return (
    <section className="py-32 relative">

      {/* Glow Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent blur-3xl" />

      <h2 className="section-title mb-16 relative z-10">Servicios</h2>

      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 relative z-10">
        {servicios.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0f0f0f]/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl hover:shadow-primary/30 transition-all group"
          >
            {/* Icono */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={s.icon}
                width={80}
                height={80}
                alt={s.title}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Título */}
            <h3 className="text-xl font-bold text-white text-center">
              {s.title}
            </h3>

            {/* Descripción */}
            <p className="text-gray-300 text-sm mt-3 text-center">
              {s.desc}
            </p>

            {/* Lista */}
            <div className="mt-6 flex flex-col gap-2 text-sm text-gray-400">
              {s.features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-primary text-lg">•</span> {f}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <a
          href="/contacto"
          className="btn-neon text-lg px-10 py-4"
        >
          Solicitar un Proyecto →
        </a>
      </div>
    </section>
  );
}
