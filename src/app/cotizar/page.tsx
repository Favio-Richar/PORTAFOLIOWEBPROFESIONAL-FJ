"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClipboardList,
  FaTools,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
} from "react-icons/fa";

export default function CotizarPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const servicios = [
    "Desarrollo Web",
    "Apps Móviles (Flutter)",
    "Backend / API",
    "ERP / Sistema Empresarial",
    "Soporte Técnico",
    "Instalación de Software",
    "Armado / Reparación de PC",
    "Redes y Conectividad",
    "Seguridad Informática",
  ];

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    // Enviar a tu API interna
    await fetch("/api/enviar-cotizacion", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    setSuccess(true);
    e.target.reset();
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 relative">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-[150px] rounded-full"></div>

      <h1 className="text-5xl font-extrabold text-white text-center mb-6">
        Solicitar Cotización
      </h1>
      <p className="text-gray-300 text-center mb-14">
        Completa este formulario y recibirás una cotización profesional en tu correo.
      </p>

      {/* SUCCESS MESSAGE */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-green-600/20 text-green-400 border border-green-600 rounded-xl text-center"
        >
          Tu solicitud fue enviada correctamente. Te responderemos por correo.
        </motion.div>
      )}

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6"
      >
        {/* Nombre */}
        <div>
          <label className="flex items-center gap-2 text-white font-semibold">
            <FaUser /> Nombre completo
          </label>
          <input
            required
            name="nombre"
            className="w-full mt-1 p-3 rounded-xl bg-black/20 border border-white/20 text-white"
            placeholder="Juan Pérez"
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-2 text-white font-semibold">
            <FaEnvelope /> Correo electrónico
          </label>
          <input
            required
            type="email"
            name="email"
            className="w-full mt-1 p-3 rounded-xl bg-black/20 border border-white/20 text-white"
            placeholder="cliente@correo.com"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="flex items-center gap-2 text-white font-semibold">
            <FaPhone /> Teléfono (opcional)
          </label>
          <input
            name="telefono"
            className="w-full mt-1 p-3 rounded-xl bg-black/20 border border-white/20 text-white"
            placeholder="+56 9 1234 5678"
          />
        </div>

        {/* Tipo de servicio */}
        <div>
          <label className="flex items-center gap-2 text-white font-semibold">
            <FaTools /> Tipo de servicio requerido
          </label>
          <select
            required
            name="servicio"
            className="w-full mt-2 p-3 rounded-xl bg-black/20 border border-white/20 text-white"
          >
            <option value="">Selecciona un servicio…</option>

            {servicios.map((s, i) => (
              <option key={i} className="text-black">
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Descripción del proyecto */}
        <div>
          <label className="flex items-center gap-2 text-white font-semibold">
            <FaClipboardList /> Describe tu proyecto
          </label>
          <textarea
            required
            name="descripcion"
            rows={5}
            className="w-full mt-2 p-3 rounded-xl bg-black/20 border border-white/20 text-white"
            placeholder="Describe lo que necesitas desarrollar o reparar..."
          />
        </div>

        {/* Botón enviar */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3 rounded-xl bg-primary text-black font-bold text-lg 
            hover:bg-primary/80 transition shadow-lg
          "
        >
          {loading ? "Enviando..." : "Enviar solicitud de cotización"}
        </button>
      </form>
    </section>
  );
}
