'use client';

import { Label, TextInput, Button } from 'flowbite-react';
import { useState } from 'react';

function CitaPage() {
    const [dateInput, setDateInput] = useState("");
    const { username } = JSON.parse(localStorage.getItem('user'));
    const [patientId] = useState(username); 
    const [reason, setReason] = useState(""); 

    const handleDateChange = (e) => {
      const value = e.target.value;
      const numericValue = value.replace(/[^\d]/g, "");

      if (numericValue.length <= 2) {
        setDateInput(numericValue);
      } else if (numericValue.length <= 4) {
        setDateInput(numericValue.substr(0, 2) + '/' + numericValue.substr(2));
      } else if (numericValue.length <= 8) {
        setDateInput(numericValue.substr(0, 2) + '/' + numericValue.substr(2, 2) + '/' + numericValue.substr(4));
      }
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const citaData = {
        patientId,
        dateTime: dateInput,
        reason,
      };

      
      const response = await fetch('http://localhost:4000/guardar-cita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(citaData)
      });
      

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert('Cita guardada con éxito.');
         
        } else {
          alert(`Error al guardar la cita: ${data.message}`);
        }
      } else {
        alert('Error al realizar la solicitud1.');
      }
    };

    return (
      <div className="flex h-screen flex-col gap-4 mx-auto justify-center bg-white">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-purple-600">Solicitar Revisión</h1>

        <div className="flex justify-between items-center">
        <button
    className="absolute top-4 right-4 inline-flex items-center rounded-lg bg-yellow-300 px-3 py-2 text-center text-sm font-medium text-black hover:bg-yellow-400 focus-outline-none focus-ring-4 focus-ring-yellow-300"
    onClick={() => {
        window.location.href = '/patient';
    }}
>
    <p>Menu Principal</p>
</button>

        </div>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mx-auto">
          <Label htmlFor="sexo" value="Usuario" style={{ color: 'purple' }} />
            <TextInput
              id="patientId"
              name="patientId"
              value={patientId}
              disabled />
          </div>
          <div className="mx-auto">
          <Label htmlFor="dateTime" value="Fecha (DD/DD/DDDD)" style={{ color: 'purple' }} />
            <TextInput
              id="dateTime"
              type="text"
              value={dateInput}
              onChange={handleDateChange}
              className="max-w-md"
            />
          </div>
          <div className="mx-auto">
          <Label htmlFor="reason" value="Motivo de la Revisión" style={{ color: 'purple' }} />
            <TextInput
              id="reason"
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="max-w-md"
            />
          </div>
          <Button type="submit" className="bg-yellow-300 text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:py-3 hover:px-5">Guardar solicitud</Button>

        </form>
      </div>
    );
}

export default CitaPage;

