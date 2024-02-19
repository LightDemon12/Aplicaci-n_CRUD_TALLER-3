'use client';
import { Label, TextInput, Button } from 'flowbite-react';
import { useState, useEffect } from 'react';

function RecetaPage() {
  const [patientId, setPatientId] = useState("");
  const [padecimiento, setPadecimiento] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
   
    const storedPatientId = localStorage.getItem('patientId');
    if (storedPatientId) {
      setPatientId(storedPatientId);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const recetaData = {
      patientId,
      padecimiento,
      descripcion,
    };
  
    try {
      const response = await fetch('http://localhost:4000/addres', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ receta: recetaData }), 
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.message) {
          alert(data.message);
        } else {
          alert('Error al guardar la receta');
        }
      } else {
        alert('Error al realizar la solicitud.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen">
         <button
            className="absolute top-4 right-4 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-cyan-800 focus-outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
            onClick={() => {
              window.location.href = '/doctor';
            }}
          >
            <p>Menu Principal</p>
          </button>
     <form onSubmit={handleSubmit} className="mx-auto"> {}
          <div className="mx-auto">
            <Label htmlFor="patientId" value="Id del paciente" />
            <TextInput
              id="patientId"
              name="patientId"
              value={patientId}
              disabled 
            />
          </div>
        <div>
          <Label htmlFor="padecimiento" value="Padecimiento" />
          <TextInput
            id="padecimiento"
            placeholder="Padecimiento"
            value={padecimiento}
            onChange={(e) => setPadecimiento(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="descripcion" value="Descripción" />
          <TextInput
            id="descripcion"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <Button type="submit">Guardar Receta</Button>
      </form>
    </div>
  );
}

export default RecetaPage;

