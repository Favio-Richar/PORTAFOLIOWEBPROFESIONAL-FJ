"use client";

import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaUsers,
  FaEnvelope,
  FaTools,
  FaChartLine,
  FaPlusCircle,
  FaEdit,
  FaShieldAlt,
  FaTrash,
} from "react-icons/fa";

export default function Admin() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* GLOW DE FONDO */}
      <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-primary/20 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-primary/20 blur-[200px] rounded-full"></div>

      {/* TITULO */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-white text-center mb-10"
      >
        Panel Administrador
      </motion.h1>

      <p className="text-gray-300 text-center max-w-xl mx-auto mb-14">
        Control total de tus proyectos, cotizaciones, clientes y contenido.
      </p>

      {/* ---- RESUMEN / ESTADÍSTICAS ---- */}
      <div className="grid md:grid-cols-4 gap-8 mb-20">
        
        {/* PROYECTOS */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl text-center"
        >
          <FaProjectDiagram className="text-primary text-4xl mx-auto" />
          <h3 className="text-xl font-bold text-white mt-3">Proyectos</h3>
          <p className="text-gray-400 mt-1 text-lg">12 activos</p>
        </motion.div>

        {/* CLIENTES */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl text-center"
        >
          <FaUsers className="text-primary text-4xl mx-auto" />
          <h3 className="text-xl font-bold text-white mt-3">Clientes</h3>
          <p className="text-gray-400 mt-1 text-lg">22 registrados</p>
        </motion.div>

        {/* COTIZACIONES */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl text-center"
        >
          <FaEnvelope className="text-primary text-4xl mx-auto" />
          <h3 className="text-xl font-bold text-white mt-3">Cotizaciones</h3>
          <p className="text-gray-400 mt-1 text-lg">8 pendientes</p>
        </motion.div>

        {/* TRÁFICO / STATS */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl text-center"
        >
          <FaChartLine className="text-primary text-4xl mx-auto" />
          <h3 className="text-xl font-bold text-white mt-3">Visitas</h3>
          <p className="text-gray-400 mt-1 text-lg">+1.2k este mes</p>
        </motion.div>
      </div>

      {/* ---- SECCIONES DE ADMINISTRACIÓN ---- */}
      <h2 className="text-3xl font-bold text-white mb-8">Gestión del contenido</h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* PROYECTOS */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="p-8 bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-xl"
        >
          <FaProjectDiagram className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-bold text-white">Proyectos</h3>
          <p className="text-gray-300 mt-2 mb-4">
            Agrega, edita o elimina proyectos destacados de tu portafolio.
          </p>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-primary text-black font-semibold rounded-lg flex items-center gap-2">
              <FaPlusCircle /> Nuevo
            </button>

            <button className="px-4 py-2 border border-white/20 text-white rounded-lg flex items-center gap-2">
              <FaEdit /> Gestionar
            </button>
          </div>
        </motion.div>

        {/* SERVICIOS */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="p-8 bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-xl"
        >
          <FaTools className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-bold text-white">Servicios</h3>
          <p className="text-gray-300 mt-2 mb-4">
            Control total de los servicios ofrecidos en tu página.
          </p>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-primary text-black font-semibold rounded-lg flex items-center gap-2">
              <FaPlusCircle /> Nuevo
            </button>

            <button className="px-4 py-2 border border-white/20 text-white rounded-lg flex items-center gap-2">
              <FaEdit /> Gestionar
            </button>
          </div>
        </motion.div>

        {/* COTIZACIONES */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="p-8 bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-xl"
        >
          <FaEnvelope className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-bold text-white">Cotizaciones</h3>
          <p className="text-gray-300 mt-2 mb-4">
            Revisa solicitudes de proyectos hechas desde el formulario de contacto.
          </p>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 border border-white/20 text-white rounded-lg flex items-center gap-2">
              <FaEdit /> Ver solicitudes
            </button>
          </div>
        </motion.div>
      </div>

      {/* ---- SECCIÓN DE ADMINISTRACIÓN AVANZADA ---- */}
      <h2 className="text-3xl font-bold text-white mt-20 mb-6">
        Configuración del sistema
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* SEGURIDAD */}
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-xl">
          <h3 className="text-xl font-bold text-white flex items-center gap-3">
            <FaShieldAlt /> Seguridad
          </h3>
          <p className="text-gray-300 mt-2 mb-4">
            Configuración de acceso, autenticación futura y permisos.
          </p>
        </div>

        {/* SISTEMA */}
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-xl">
          <h3 className="text-xl font-bold text-white flex items-center gap-3">
            <FaTools /> Preferencias del sistema
          </h3>
          <p className="text-gray-300 mt-2 mb-4">
            Ajustes del sitio, marca, correo, automatizaciones y más.
          </p>
        </div>

      </div>
    </section>
  );
}
