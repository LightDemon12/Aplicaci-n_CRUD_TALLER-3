'use client'
import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();

      localStorage.setItem('user', JSON.stringify(data.user));

      switch (data.user.role) {
        case 'doctor':
          window.location.href = '/doctor';
          break;
        case 'patient':
          window.location.href = '/patient';
          break;
        case 'nurse':
          window.location.href = '/estado';
          break;
        default:
          console.log('Error');
          break;
      }
    } else {
      setError('Usuario o contraseña incorrectos'); 
    }
  }

  const handleRedirectToRegistro = () => {
    window.location.href = '/registro';
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-800">
            Inicia sesión
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-6 w-full">
            <label className="block mb-2 text-sm font-medium text-purple-800">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="email" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user" required />
          </div>
          <div className="mb-6 w-full">
            <label className="block mb-2 text-sm font-medium text-purple-800">Your password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password" id="password" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex items-start mb-6 w-full justify-center">
            <button type="submit" className="bg-yellow-300 text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:py-3 hover:px-5">Iniciar sesión</button>
          </div>
          {error && <p className="text-red-500">{error}</p>} {}
          <button onClick={handleRedirectToRegistro} className="border border-yellow-300 bg-yellow-300 text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:py-3 hover:px-5">
    Registro
</button>


        </form>
      </div>
    </div>
  );
}

export default LoginPage;





