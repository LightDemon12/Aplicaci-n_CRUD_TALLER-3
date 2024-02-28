'use client';
import React, { useEffect, useState } from "react";

function estadoPage() {
    const [citas, setCitas] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const username = user ? user.username : null;

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
        
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className="text-3xl font-semibold mb-4 text-purple-600">Citas en el sistema</h1>
            <button
        className="absolute top-4 right-4 inline-flex items-center rounded-lg bg-yellow-300 px-3 py-2 text-center text-sm font-medium text-black hover:bg-yellow-400 focus-outline-none focus-ring-4 focus-ring-yellow-300"
        onClick={() => {
          window.location.href = '/patient';
        }}
      >
        <p>Menu Principal</p>
      </button>
                <div className="overflow-x-auto w-full">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs bg-gray-200 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Estudiante
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
                        </tr>
                    </thead>
                    <tbody>
                    {citas
    .filter((cita) => cita.patientId === username && cita.status !== "rechazada")
    .map((cita) => (
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
        </tr>
    ))}

</tbody>
                </table>
            </div>
        </div>
    );
}

export default estadoPage;
