export default function Contacto() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contacto</h1>

      <form className="grid gap-4 max-w-xl">
        <input className="border p-3 rounded" placeholder="Nombre" />
        <input className="border p-3 rounded" placeholder="Correo" />
        <textarea className="border p-3 rounded" placeholder="Mensaje"></textarea>

        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </div>
  );
}
