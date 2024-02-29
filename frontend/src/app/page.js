import Link from "next/link";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-white">
      <h1 className="text-2xl font-bold text-purple-800 mb-8">Universidad de San Carlos de Guatemala</h1>
      <p className="text-lg text-purple-800 mb-4">Facultad de Ingeniería, Escuela de EPS</p>
      <p className="text-lg text-purple-800 mb-4">Prácticas Iniciales Sección F-</p>
      <nav className="mt-8">
        <ul>
          <li>
            <Link href="/login">
              <button className="bg-yellow-300 text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:py-3 hover:px-5">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-12 text-center">
        <h2 className="text-lg font-semibold text-purple-800 mb-2">Lista de Participantes Grupo#3:</h2>
        <ul className="text-purple-800">
          <li>Mauricio Alejandro Sagastume Barrios (Coordinador) - 201800979</li>
          <li>Luis Gabriel López Polanco - 202001523</li>
          <li>Antony Stive Fuentes Marroquín - 202001497</li>
          <li>Luis Pablo Manuel García López - 202200129</li>
          <li>Ángel Guillermo de Jesús Pérez Jiménez - 202100215</li>
          <li>José Luis Antonio González García - 202210009</li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
