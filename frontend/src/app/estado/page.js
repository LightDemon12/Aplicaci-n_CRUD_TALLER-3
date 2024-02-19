'use client';

import React, { useEffect, useState } from "react";

function estadoPage() {
    const [citas, setCitas] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(""); 

    useEffect(() => {
        const fetchCitas = async () => {
            const response = await fetch('http://localhost:4000/citas');

            if (response.ok) {
                const data = await response.json();
                setCitas(data);
            }
        }

        fetchCitas();
    }, []);

    const handleAceptarCita = async (citaId) => {
       
        if (selectedDoctor === "") {
            alert('Por favor, selecciona un médico antes de aceptar la cita.');
            return;
        }
    
        const response = await fetch('http://localhost:4000/cambiar-cita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                citaId,
                nuevoEstado: 'aceptada',
                doctor: selectedDoctor
            })
        });
    
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
               
            } else {
                alert(`Error al aceptar la cita: ${data.message}`);
            }
        } else {
            alert('Error al realizar la solicitud.');
        }
    };
    
    const handleRechazarCita = async (citaId) => {
        
        if (selectedDoctor === "") {
            alert('Por favor, selecciona un médico antes de rechazar la cita.');
            return;
        }
    
       
        const response = await fetch('http://localhost:4000/cambiar-cita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                citaId,
                nuevoEstado: 'rechazada',
                doctor: selectedDoctor 
            })
        });
    
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
             
            } else {
                alert(`Error al rechazar la cita: ${data.message}`);
            }
        } else {
            alert('Error al realizar la solicitud.');
        }
    };
    const handleLoginRedirect = () => {
        window.location.href = '/login';
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-semibold mb-4">Citas en el sistema</h1>
            <button onClick={handleLoginRedirect} className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-600">
                Ir a Iniciar Sesión
            </button>
            {}
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Selecciona un médico:</label>
                <select
    onChange={(e) => setSelectedDoctor(e.target.value)}
    value={selectedDoctor}
    className="w-full p-2 border rounded-md"
>
    <option value="">-- Selecciona un médico --</option>
    <option value="doctor1">Dr. Juan López</option>
    <option value="doctor2">Dr. Carlos González</option>
</select>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs bg-gray-200 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Paciente
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha y Hora
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Motivo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {citas.map((cita) => (
                            <tr key={cita.id} className="bg-white dark:bg-gray-800">
                                <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                    {cita.patientId}
                                </td>
                                <td className="px-6 py-4">
                                    {cita.dateTime}
                                </td>
                                <td className="px-6 py-4">
                                    {cita.reason}
                                </td>
                                <td className="px-6 py-4">
                                    {cita.status}
                                </td>
                                <td className="px-6 py-4">
                                    {cita.status === 'pendiente' ? (
                                        <div>
                                            <button
                                                onClick={() => handleAceptarCita(cita.id)}
                                                className="text-green-500 hover:underline mr-2"
                                            >
                                                Aceptar
                                            </button>
                                            <button
                                                onClick={() => handleRechazarCita(cita.id)}
                                                className="text-red-500 hover:underline"
                                            >
                                                Rechazar
                                            </button>
                                        </div>
                                    ) : null}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default estadoPage;
