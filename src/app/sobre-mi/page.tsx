export default function SobreMi() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Sobre mí</h1>

      <p className="text-lg text-gray-700 leading-relaxed">
        Soy Favio Jiménez, un desarrollador full stack apasionado por crear
        soluciones modernas, potentes y escalables...
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Tecnologías que domino</h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
        <li>Python</li>
        <li>FastAPI</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Flutter</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  );
}
