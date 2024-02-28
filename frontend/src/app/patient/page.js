'use client';
import React from 'react';
import { Card } from 'flowbite-react';

const { firstName } = JSON.parse(localStorage.getItem('user'));

function pacientes1Page() {
    const handleSolicitarCita = () => {
        window.location.href = '/cita';
    }

    const handleEstadopc = () => {
        window.location.href = '/estadopc';
    }

    const handleCerrarSesion = () => {
        window.location.href = '/login';
    }

    return (
        <div className="bg-white">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Card>
                    <div className="flex flex-col items-center space-y-3">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                            {firstName}
                        </h5>
                        <span className="block mb-2 text-sm font-medium text-black-800">
                            Estudiante
                        </span>
                        <div className="mt-3 flex flex-col space-y-3 lg:mt-4">
                            <div className="flex space-x-3">
                                <button
                                    className="mt-4 bg-yellow-300 text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:py-3 hover:px-5 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                                    onClick={handleSolicitarCita}
                                >
                                    Solicitar cita
                                </button>
                                <button
                                    className="mt-4 bg-yellow-300 text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:py-3 hover:px-5 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                                    onClick={handleEstadopc}
                                >
                                    Estado de las citas del paciente
                                </button>
                            </div>
                            <button
                                className="mt-4 bg-yellow-300 text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white hover:py-3 hover:px-5 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                                onClick={handleCerrarSesion}
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default pacientes1Page;


