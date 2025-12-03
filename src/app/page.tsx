import Hero from "@/components/home/Hero";
import Tecnologias from "@/components/home/Tecnologias";
import Experiencia from "@/components/home/Experiencia";
import Certificaciones from "@/components/home/Certificaciones";
import ProyectosHome from "@/components/home/ProyectosHome";
import ServiciosHome from "@/components/home/ServiciosHome";
import Testimonios from "@/components/home/Testimonios";
import ContactoHome from "@/components/home/ContactO";


export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiciosHome />
      <ProyectosHome />
      <Tecnologias />
      <Experiencia />
      <Testimonios />
      <Certificaciones />
      <ContactoHome />

    </>
  );
}
