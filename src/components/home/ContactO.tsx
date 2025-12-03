"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactoHome() {
  return (
    <section className="relative py-32 px-6 max-w-6xl mx-auto text-center">

      {/* Glow decorativo */}
      <div className="absolute inset-0 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-white mb-6"
      >
        ¿Listo para iniciar tu proyecto?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-300 text-lg max-w-2xl mx-auto mb-14"
      >
        Construyamos tu web, sistema o aplicación móvil con calidad profesional,
        rendimiento y escalabilidad. Respondo en minutos.
      </motion.p>

      {/* Botones principales */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/56911111111"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="
            flex items-center gap-3 px-8 py-4 rounded-full
            bg-green-500 hover:bg-green-600 text-white font-semibold
            shadow-lg shadow-green-500/30 transition-all
          "
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp
        </motion.a>

        {/* Correo */}
        <motion.a
          href="mailto:contacto@tuemail.com"
          whileHover={{ scale: 1.05 }}
          className="
            flex items-center gap-3 px-8 py-4 rounded-full
            bg-white/10 backdrop-blur-xl border border-white/20
            hover:bg-white/20 text-white font-semibold
            transition-all
          "
        >
          <FaEnvelope className="text-xl" />
          Enviar Email
        </motion.a>

        {/* Llamada directa */}
        <motion.a
          href="tel:+56911111111"
          whileHover={{ scale: 1.05 }}
          className="
            flex items-center gap-3 px-8 py-4 rounded-full
            bg-primary/20 text-primary
            border border-primary/40
            hover:bg-primary/30
            transition-all font-semibold
          "
        >
          <FaPhone className="text-xl" />
          Llamar
        </motion.a>

      </div>

      {/* Frase final */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-500 text-sm mt-10"
      >
        Disponible todos los días — Santiago, Chile 🇨🇱
      </motion.p>
    </section>
  );
}
