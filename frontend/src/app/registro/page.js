'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import { useState, useEffect } from 'react';

function RegistroPage() {
 
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [telefono, setTelefono] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPatient = {
      firstName: nombre,
      lastName: apellido,
      username: nombreUsuario,
      birthDate: fechaNacimiento,
      genre: sexo,
      password: contrasena,
      phone: telefono,
    };

   
    const response = await fetch('http://localhost:4000/register-patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPatient)
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        alert('Usuario registrado con éxito.');
        window.location.href = '/login';
      } else {
        alert(`Error al registrar usuario: ${data.message}`);
      }
    } else {
      alert('Error al realizar la solicitud.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="nombre" value="Nombre" />
          <TextInput
            id="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="apellido" value="Apellido" />
          <TextInput
            id="apellido"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
  <Label htmlFor="telefono" value="Número de teléfono" />
  <TextInput
    id="telefono"
    placeholder="Número de teléfono"
    value={telefono}
    onChange={(e) => setTelefono(e.target.value)}
  />
</div>
        <div>
          <Label htmlFor="nombreUsuario" value="Nombre de usuario (único)" />
          <TextInput
            id="nombreUsuario"
            placeholder="Nombre de usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="fechaNacimiento" value="Fecha de nacimiento" />
          <TextInput
            id="fechaNacimiento"
            placeholder="Fecha de nacimiento"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="sexo" value="Sexo" />
          <TextInput
            id="sexo"
            placeholder="Sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="contrasena" value="Contraseña (al menos 8 caracteres)" />
          <TextInput
            id="contrasena"
            type="password"
            placeholder="Contraseña"
            minLength="8"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <Button type="submit">Registrar paciente</Button>
      </form>
    </div>
  );
}

export default RegistroPage;
