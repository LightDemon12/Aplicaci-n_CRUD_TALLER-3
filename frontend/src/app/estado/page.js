'use client';

import React, { useEffect, useState } from "react";



function estadoPage() {
    const [citas, setCitas] = useState([]);

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
        const response = await fetch('http://localhost:4000/cambiar-cita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                citaId,
                nuevoEstado: 'aceptada'
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                // Actualizar estado de la cita localmente si es necesario
            } else {
                alert(`Error al aceptar la cita: ${data.message}`);
            }
        } else {
            alert('Error al realizar la solicitud.');
        }
    };
    
    const handleRechazarCita = async (citaId) => {
        const response = await fetch('http://localhost:4000/cambiar-cita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                citaId,
                nuevoEstado: 'rechazada'
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                // Actualizar estado de la cita localmente si es necesario
            } else {
                alert(`Error al rechazar la cita: ${data.message}`);
            }
        } else {
            alert('Error al realizar la solicitud.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className="text-3xl font-semibold mb-4 text-purple-600">Revisiónes en el sistema</h1>
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
            <button
                className="bg-yellow-300 text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:py-3 hover:px-5 mt-4"
                onClick={() => {
                    window.location.href = '/login';
                }}
            >
                Regresar
            </button>
        </div>
    );
}

export default estadoPage;


