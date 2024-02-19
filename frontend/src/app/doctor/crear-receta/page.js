'use client';
import React, { useEffect, useState } from "react";

function RecetaPage() {
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

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-semibold mb-4">Citas en el sistema</h1>
            <div className="overflow-x-auto w-full">
                <button
                    className="absolute top-4 right-4 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-cyan-800 focus-outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
                    onClick={() => {
                        window.location.href = '/patient';
                    }}
                >
                    <p>Menu Principal</p>
                </button>
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
                                Seleccionar
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
                                    <button
                                        className="text-blue-700 hover:underline"
                                        onClick={() => {
                                        
                                            window.location.href = '/receta';
                                        }}
                                    >
                                        Seleccionar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecetaPage;

