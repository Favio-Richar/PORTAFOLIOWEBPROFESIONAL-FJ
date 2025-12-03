import Image from "next/image";

const proyectos = [
  {
    titulo: "SmartRent+",
    descripcion:
      "Plataforma completa de arriendos, ventas, pagos, marketplace y panel admin en Flutter + FastAPI + PostgreSQL.",
    img: "/mockups/laptop.png", // Puedes cambiarlo luego
    demo: "https://nextlevelsoftwarepro.com",
    repo: "https://github.com/Favio-Richar",
    stack: ["Next.js", "Flutter", "FastAPI", "PostgreSQL"],
  },
  {
    titulo: "Mi Negocio Digital",
    descripcion:
      "Sistema ERP/CRM para PYMEs: inventario, ventas, reportes, soporte y usuarios.",
    img: "/mockups/mobile.png",
    demo: "#",
    repo: "#",
    stack: ["Flutter", "NestJS", "PostgreSQL"],
  },
];

export default function ProyectosPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">
        Proyectos Destacados
      </h1>

      <div className="grid gap-12">
        {proyectos.map((p, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-8 shadow-lg rounded-xl"
          >
            {/* Mockup */}
            <div className="flex justify-center">
              <div className="border-4 border-gray-300 rounded-xl shadow overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.titulo}
                  width={500}
                  height={350}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Información */}
            <div>
              <h2 className="text-3xl font-bold mb-3">{p.titulo}</h2>

              <p className="text-gray-700 mb-4">{p.descripcion}</p>

              {/* Tecnologías */}
              <div className="flex gap-2 flex-wrap mb-6">
                {p.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex gap-4">
                <a
                  href={p.demo}
                  target="_blank"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                >
                  Ver Demo
                </a>

                <a
                  href={p.repo}
                  target="_blank"
                  className="px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
