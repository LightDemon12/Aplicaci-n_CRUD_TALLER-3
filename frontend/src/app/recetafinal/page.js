'use client';
import React, { useEffect, useState } from "react";

function finalPage() {
  const [recetas, setRecetas] = useState([]);
  
  useEffect(() => {
 
    fetch('http://localhost:4000/recetasfinal')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener recetas');
        }
        return response.json();
      })
      .then((data) => setRecetas(data))
      .catch((error) => console.error('Error al obtener recetas:', error));
  }, []);

  return (
    <div>
      <button
        className="absolute top-4 right-4 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-cyan-800 focus-outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
        onClick={() => {
          window.location.href = '/patient';
        }}
      >
        <p>Menu Principal</p>
      </button>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        {}
        <ul>
          {recetas.map((receta, index) => (
            <li key={index}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                {receta.firstName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Paciente
              </span>
              {}
              {}
              <p>Padecimiento: {receta.padecimiento}</p>
              <p>Descripción: {receta.descripcion}</p>
              {}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default finalPage;

