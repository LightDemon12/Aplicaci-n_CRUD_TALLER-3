import Link from "next/link";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-white">
      <h1 className="text-2xl font-bold text-purple-800">Universidad de San Carlos de Guatemala</h1>
      <p className="text-lg text-purple-800">Facultad de Ingeniería, Escuela de EPS</p>
      <p className="text-lg text-purple-800">Practicas Iniciales Sección F-</p>
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
    </main>
  );
}

export default Home;
