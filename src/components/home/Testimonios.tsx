"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

export default function Testimonios() {
  const data = [
    {
      name: "Luis Fernández",
      role: "CEO – Startup Chile",
      stars: 5,
      text: "Favio desarrolló nuestra app completa. Profesional, rápido y confiable. Nos entregó un producto escalable y moderno.",
      img: "/testimonials/luis.jpg",
      logo: "/testimonials/logo1.png",
    },
    {
      name: "María González",
      role: "Gerente TI – PYMEs",
      stars: 5,
      text: "Nuestra empresa mejoró sus procesos al 100% gracias a su ERP. Excelente comunicación y compromiso.",
      img: "/testimonials/maria.jpg",
      logo: "/testimonials/logo2.png",
    },
    {
      name: "Carlos Méndez",
      role: "Dueño – Servicios Pyme",
      stars: 4,
      text: "Su sistema de inventario nos permitió digitalizar el negocio. El soporte es de primera.",
      img: "/testimonials/empresa1.jpg",
      logo: "/testimonials/logo3.png",
    },
    {
      name: "Ana Rojas",
      role: "Fundadora – Agencia Creativa",
      stars: 5,
      text: "Desarrolló nuestro sitio profesional con una UX increíble. Aumento inmediato en conversión.",
      img: "/testimonials/empresa2.jpg",
      logo: "/testimonials/logo4.png",
    },
  ];

  return (
    <section className="py-32 relative max-w-7xl mx-auto px-6">

      {/* Glow decorativos premium */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-primary/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[200px] rounded-full"></div>

      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-center text-white mb-16 tracking-tight"
      >
        Testimonios
      </motion.h2>

      {/* SWIPER ULTRA PRO */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full pb-16"
      >
        {data.map((t, i) => (
          <SwiperSlide
            key={i}
            className="max-w-md rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl"
          >

            {/* Comilla */}
            <FaQuoteLeft className="text-primary/40 text-4xl mb-4" />

            {/* Texto */}
            <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
              “{t.text}”
            </p>

            {/* STARS */}
            <div className="flex gap-1 mb-4">
              {Array(t.stars)
                .fill(0)
                .map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
            </div>

            {/* Info del cliente */}
            <div className="flex items-center gap-4 mt-2">
              <Image
                src={t.img}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full border border-white/20 object-cover"
              />

              <div>
                <h4 className="text-white font-bold text-lg">{t.name}</h4>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Logo Empresa */}
            <div className="mt-6">
              {t.logo && (
                <Image
                  src={t.logo}
                  alt="logo"
                  width={90}
                  height={40}
                  className="opacity-60 mx-auto"
                />
              )}
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
