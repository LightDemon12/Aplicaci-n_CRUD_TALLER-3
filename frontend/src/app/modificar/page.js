'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';

const { firstName, lastName, password, birthDate } = JSON.parse(localStorage.getItem('user'));

function ModificarPage() {
  const [newData, setNewData] = useState({ firstName, lastName, password, birthDate });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4000/modify-patient/:username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        alert('Datos del paciente actualizados con éxito');
      } else {
        alert('Hubo un error al actualizar los datos del paciente');
      }
    } catch (error) {
      console.error(error);
      alert('Hubo un error al actualizar los datos del paciente');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="absolute top-4 right-4 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-cyan-800 focus-outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
        onClick={() => {
          window.location.href = '/patient';
        }}
      >
        <p>Menu Principal</p>
      </button>
      <h1 className="text-3xl font-extrabold mb-4">UHospital - informacion de paciente</h1>
      <form className="max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="nombre" value="Nombre" />
          <TextInput
            id="nombre"
            name="firstName"
            value={newData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="apellido" value="Apellido" />
          <TextInput
            id="apellido"
            name="lastName"
            value={newData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="fechaNacimiento" value="Fecha de nacimiento" />
          <TextInput
            id="fechaNacimiento"
            name="birthDate"
            value={newData.birthDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="contrasena" value="Contraseña (al menos 8 caracteres)" />
          <TextInput
            id="contrasena"
            type="password"
            name="password"
            value={newData.password}
            onChange={handleInputChange}
            minLength="8"
          />
        </div>
        <Button type="submit">Modificar paciente</Button>
      </form>
    </div>
  );
}

export default ModificarPage;
