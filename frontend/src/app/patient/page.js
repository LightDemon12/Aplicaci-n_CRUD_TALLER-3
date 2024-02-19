'use client';
import React from 'react';
import { Card } from 'flowbite-react';

const { firstName } = JSON.parse(localStorage.getItem('user'));

function pacientes1Page() {
    const handleVerRecetas = () => {
        window.location.href = '/recetafinal';
    }

    const handleModificarPerfil = () => {
        window.location.href = '/modificar';
    }

    const handleSolicitarCita = () => {
        window.location.href = '/cita';
    }

    const handleComprarMedicina = () => {
        window.location.href = '/compra';
    }

    const handleEstadopc = () => {
        window.location.href = '/estadopc';
    }

    return (
        <div>
            <button
                className="absolute top-4 right-4 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-cyan-800 focus-outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
                onClick={() => {
                    window.location.href = '/login';
                }}
            >
                <p>Cerrar sesión</p>
            </button>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Card>
                    <div className="flex flex-col items-center space-y-3">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                            {firstName}
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Paciente
                        </span>
                        <div className="mt-3 flex flex-col space-y-3 lg:mt-4">
                            <div className="flex space-x-3">
                                <a
                                    className="flex-1 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-cyan-800 focus:outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
                                    onClick={handleVerRecetas}
                                >
                                    <p>Ver Recetas</p>
                                </a>
                                <a
                                    className="flex-1 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-cyan-800 focus-outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
                                    onClick={handleModificarPerfil}
                                >
                                    <p>Modificar Perfil</p>
                                </a>
                            </div>
                            <div className="flex space-x-3">
                                <a
                                    className="flex-1 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-cyan-800 focus-outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
                                    onClick={handleSolicitarCita}
                                >
                                    <p>Solicitar cita</p>
                                </a>
                                <a
                                    className="flex-1 inline-flex items-center rounded-lg bg-green-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-green-800 focus-outline-none focus-ring-4 focus-ring-green-300 dark-bg-green-600 dark-hover-bg-green-700 dark-focus-ring-green-800"
                                    onClick={handleComprarMedicina}
                                >
                                    <p>Comprar medicina</p>
                                </a>
                                <a
                                    className="flex-1 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover-bg-blue-800 focus-outline-none focus-ring-4 focus-ring-blue-300 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
                                    onClick={handleEstadopc}
                                >
                                    <p>Estado de las citas del paciente</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default pacientes1Page;

