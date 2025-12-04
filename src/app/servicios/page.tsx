"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaMobileAlt,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaArrowRight,
  FaTools,
  FaDesktop,
  FaShieldAlt,
  FaSync,
  FaNetworkWired,
  FaWrench,
  FaCheckCircle,
  FaBolt,
  FaHandshake,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

//
// 🔵 SERVICIOS PRINCIPALES (DESARROLLO)
//
const servicios = [
  {
    titulo: "Desarrollo Web Profesional",
    descripcion:
      "Sitios web modernos, rápidos, optimizados para SEO y adaptados a cualquier dispositivo.",
    largo:
      "Desarrollo completo con Next.js, SSR, ISG, SEO avanzado, paneles administrativos, dashboards y componentes personalizados para empresas.",
    icon: <FaLaptopCode className="text-primary text-4xl" />,
  },
  {
    titulo: "Apps Móviles (Flutter)",
    descripcion:
      "Aplicaciones móviles para Android y iOS con rendimiento nativo y diseño profesional.",
    largo:
      "Apps creadas con Flutter, arquitectura limpia, integración con API, notificaciones push, autenticación segura y publicación en PlayStore/AppStore.",
    icon: <FaMobileAlt className="text-primary text-4xl" />,
  },
  {
    titulo: "APIs y Backend Empresarial",
    descripcion:
      "APIs rápidas y escalables con FastAPI o NestJS para sistemas móviles y web.",
    largo:
      "Autenticación JWT, roles, permisos, microservicios, dockerización, CI/CD y despliegue sólido en VPS Linux.",
    icon: <FaServer className="text-primary text-4xl" />,
  },
  {
    titulo: "Bases de Datos y Modelado",
    descripcion:
      "Diseño experto de PostgreSQL con modelos optimizados y consultas eficientes.",
    largo:
      "Modelado profesional, índices, funciones SQL, triggers, migraciones y auditorías empresariales.",
    icon: <FaDatabase className="text-primary text-4xl" />,
  },
  {
    titulo: "DevOps y Despliegues",
    descripcion:
      "Docker, VPS, NGINX, SSL, monitoreo y pipelines para proyectos profesionales.",
    largo:
      "CI/CD con GitHub Actions, escalamiento, certificados SSL, monitoreo, logs y seguridad en producción.",
    icon: <FaCloud className="text-primary text-4xl" />,
  },
  {
    titulo: "Sistemas Empresariales / ERP",
    descripcion:
      "Desarrollo de sistemas completos con ventas, inventario, reportes, usuarios y más.",
    largo:
      "ERP/CRM personalizados con roles avanzados, dashboards, reportes PDF, gráficas, módulos escalables y soporte extendido.",
    icon: <FaCogs className="text-primary text-4xl" />,
  },
];

//
// 🔧 SERVICIOS TÉCNICOS
//
const serviciosTecnicos = [
  {
    titulo: "Soporte Técnico General",
    descripcion: "Solución de problemas, asistencia remota y mantenimiento TI.",
    icon: <FaTools className="text-primary text-3xl" />,
  },
  {
    titulo: "Formateo y Optimización",
    descripcion: "Windows limpio, rápido y optimizado como nuevo.",
    icon: <FaSync className="text-primary text-3xl" />,
  },
  {
    titulo: "Instalación de Software",
    descripcion: "Office, antivirus, drivers, sistemas empresariales.",
    icon: <FaWrench className="text-primary text-3xl" />,
  },
  {
    titulo: "Armado y Mejora de PC",
    descripcion:
      "Instalación de RAM, SSD, GPU, fuentes, armado gamer u oficina.",
    icon: <FaDesktop className="text-primary text-3xl" />,
  },
  {
    titulo: "Seguridad Informática",
    descripcion:
      "Eliminación de virus, firewall, copias de seguridad y protección profesional.",
    icon: <FaShieldAlt className="text-primary text-3xl" />,
  },
  {
    titulo: "Redes y Conectividad",
    descripcion: "WiFi, routers, impresoras, cableado y redes locales.",
    icon: <FaNetworkWired className="text-primary text-3xl" />,
  },
];

//
// ⚡ SERVICIOS EXPRESS
//
const serviciosExpress = [
  "Instalación rápida de programas",
  "Eliminación de virus en minutos",
  "Limpieza de PC express",
  "Optimización remota por AnyDesk",
  "Configuración rápida de correo",
];

//
// 🏢 SERVICIOS PARA EMPRESAS
//
const serviciosEmpresas = [
  "Soporte mensual contratado",
  "Mantenimiento preventivo + correctivo",
  "Gestión de infraestructura TI",
  "Respaldo y seguridad avanzada",
  "Implementación de sistemas internos",
];

export default function ServiciosPage() {
  const [modalData, setModalData] = useState<any>(null);

  return (
    <>
      {/* MODAL */}
      {modalData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-[200]"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white/10 border border-white/20 p-8 rounded-3xl max-w-3xl w-full shadow-2xl"
          >
            <h2 className="text-3xl text-white font-bold">{modalData.titulo}</h2>

            <p className="text-gray-300 mt-4">{modalData.largo}</p>

            <button
              onClick={() => setModalData(null)}
              className="mt-6 px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* HERO */}
      <section className="text-center py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[200px] rounded-full"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold text-white"
        >
          Servicios Profesionales
        </motion.h1>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Desarrollo moderno, soluciones empresariales y soporte técnico integral.
        </p>

        <motion.a
          href="/cotizar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 inline-block px-8 py-3 rounded-xl bg-primary text-black font-semibold hover:bg-primary/80 transition"
        >
          Cotizar un servicio →
        </motion.a>
      </section>

      {/* DESARROLLO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Soluciones de Desarrollo
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-xl cursor-pointer"
            >
              <div className="mb-4">{s.icon}</div>

              <h3 className="text-xl text-white font-bold">{s.titulo}</h3>
              <p className="text-gray-300 mt-2">{s.descripcion}</p>

              <button
                onClick={() => setModalData(s)}
                className="mt-4 text-primary flex items-center gap-2 hover:underline"
              >
                Ver detalles <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICIOS TECNICOS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Servicios Técnicos y Soporte
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {serviciosTecnicos.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-xl"
            >
              <div className="mb-4">{s.icon}</div>

              <h3 className="text-xl text-white font-bold">{s.titulo}</h3>
              <p className="text-gray-300 mt-2">{s.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICIOS EXPRESS */}
      <section className="bg-white/5 backdrop-blur-xl py-20 border-y border-white/10">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Servicios Express
        </h2>

        <ul className="max-w-3xl mx-auto space-y-4 text-gray-300 text-lg">
          {serviciosExpress.map((s, i) => (
            <li key={i} className="flex items-center gap-3">
              <FaBolt className="text-primary" /> {s}
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICIOS EMPRESAS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-white font-bold text-center mb-10">
          Servicios para Empresas
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {serviciosEmpresas.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 rounded-2xl border border-white/10 text-gray-300"
            >
              <FaHandshake className="text-primary text-3xl mb-3" />
              <h3 className="text-xl font-bold text-white">{s}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUÉ ELEGIRME */}
      <section className="py-24 bg-white/5 backdrop-blur-xl border-t border-white/10">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          ¿Por qué elegirme?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaCheckCircle className="text-primary text-4xl" />,
              title: "Calidad Profesional",
              desc: "Desarrollo sólido con arquitectura moderna y buenas prácticas.",
            },
            {
              icon: <FaClock className="text-primary text-4xl" />,
              title: "Entrega Puntual",
              desc: "Planificación exacta y fechas de entrega confiables.",
            },
            {
              icon: <FaChartLine className="text-primary text-4xl" />,
              title: "Escalabilidad",
              desc: "Sistemas preparados para crecer junto a tu negocio.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-white/10 rounded-3xl bg-black/20 text-gray-300"
            >
              {item.icon}
              <h3 className="text-white text-xl font-bold mt-4">
                {item.title}
              </h3>
              <p className="mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-20">
        <h3 className="text-3xl text-white font-bold">
          ¿Necesitas soporte, desarrollo o un sistema completo?
        </h3>
        <p className="text-gray-400 mt-2">
          Estoy listo para ayudarte a construir soluciones reales.
        </p>

        <a
          href="/cotizar"
          className="mt-6 inline-block px-10 py-4 bg-primary text-black rounded-xl font-semibold hover:bg-primary/80 transition"
        >
          Cotizar servicio →
        </a>
      </section>
    </>
  );
}
