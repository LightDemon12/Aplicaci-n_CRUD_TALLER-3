'use client';

import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';

const { firstName } = JSON.parse(localStorage.getItem('user'));

function CompraPage() {
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [medicinas, setMedicinas] = useState([]);
    const [medicinaCantidad, setMedicinaCantidad] = useState({});

    useEffect(() => {
        const fetchMedicinas = async () => {
            const response = await fetch('http://localhost:4000/medicinas');

            if (response.ok) {
                const data = await response.json();
                setMedicinas(data);
                
                const initialCantidad = {};
                data.forEach((medicina) => {
                    initialCantidad[medicina.id] = 1;
                });
                setMedicinaCantidad(initialCantidad);
            }
        }

        fetchMedicinas();
    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const { username, firstName } = user;
            setFirstName(firstName);
            setUsername(username);
        }
    }, []);

    const handleCompraMedicina = async (medicina) => {
        try {
            if (medicinaCantidad[medicina.id] >= 1) {
                const cantidadComprada = medicinaCantidad[medicina.id];

             
                const response = await fetch('http://localhost:4000/compra-medicina', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        idMedicina: medicina.id,
                        cantidad: cantidadComprada,
                        idPaciente: username,
                        nombreMedicina: medicina.nombre,
                        precioMedicina: medicina.precio,
                    }),
                });

                if (response.ok) {
                   
                    const medicinasActualizadas = [...medicinas];
                    const medicinaIndex = medicinasActualizadas.findIndex(item => item.id === medicina.id);
                    if (medicinaIndex !== -1) {
                        medicinasActualizadas[medicinaIndex].cantidad -= cantidadComprada;
                        setMedicinas(medicinasActualizadas);
                    }

                    alert('Medicina agregada a su factura');

                    
                    setMedicinaCantidad(prevState => ({
                        ...prevState,
                        [medicina.id]: 1
                    }));
                } else {
                    alert('Error al comprar medicina');
                }
            } else {
                alert('Seleccione al menos una unidad de este medicamento');
            }
        } catch (err) {
            alert('Error al comprar medicina');
            console.log(err);
        }
    }

    const handleAumentarCantidad = (medicinaId) => {
      
        const cantidadDisponible = medicinas.find(medicina => medicina.id === medicinaId).cantidad;

        if (medicinaCantidad[medicinaId] < cantidadDisponible) {
            setMedicinaCantidad(prevState => ({
                ...prevState,
                [medicinaId]: (prevState[medicinaId] || 0) + 1
            }));
        } else {
            alert('Ha superado la cantidad disponible de este medicamento');
        }
    }

    const handleReducirCantidad = (medicinaId) => {
        if (medicinaCantidad[medicinaId] > 1) {
            setMedicinaCantidad(prevState => ({
                ...prevState,
                [medicinaId]: (prevState[medicinaId] || 0) - 1
            }));
        }
    }

    const handleFactura = () => {
        window.location.href = '/total';
    }

    return (
        <div>
            <button
                className="absolute top-4 right-4 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-white font-medium text-blue-700 hover-bg-cyan-800 focus-outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
                onClick={() => {
                    window.location.href = '/patient';
                }}
            >
                <p>Menu Principal</p>
            </button>
            <h1 className="pb-10 text-center">Módulo compra de medicinas</h1>
            <div className="grid grid-cols-2 gap-3">
                {medicinas.map((medicina) => (
                    <div
                        key={medicina.id}
                        className="w-52 p-6 mx-auto bg-blue-700 border border-gray-200 rounded-lg shadow dark-bg-gray-800 dark-border-gray-700"
                    >
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold text-center text-white dark-text-gray-900">
                                {medicina.nombre}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-center text-white dark-text-gray-400">
                            {medicina.descripcion}
                        </p>
                        <button
                            className={`inline-flex items-center justify-center w-full h-10 px-3 py-2 text-sm font-medium rounded-lg focus-ring-4 focus-outline-none focus-ring-blue-300 dark-bg-white dark-focus-ring-blue-800 ${
                                medicinaCantidad[medicina.id] >= medicina.cantidad ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'text-blue-700 bg-white hover-bg-blue-800'
                            }`}
                            onClick={() => handleCompraMedicina(medicina)}
                            disabled={medicinaCantidad[medicina.id] >= medicina.cantidad}
                        >
                            Q.{medicina.precio}
                            <svg
                                className="w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>

                        <div className="mt-3 flex justify-center">
                            <button
                                className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center"
                                onClick={() => handleAumentarCantidad(medicina.id)}
                            >
                                +
                            </button>
                            <p className="mx-2 text-lg font-semibold text-white">
                                {medicinaCantidad[medicina.id] || 0}
                            </p>
                            <button
                                className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center"
                                onClick={() => handleReducirCantidad(medicina.id)}
                            >
                                -
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute bottom-4 right-4 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-2 text-center text-white font-medium text-blue-700 hover-bg-cyan-800 focus-outline-none focus-ring-4 focus-ring-cyan-300 dark-bg-cyan-600 dark-hover-bg-cyan-700 dark-focus-ring-cyan-800"
                onClick={handleFactura}
            >
                <p>Factura</p>
            </button>
        </div>
    );
}

export default CompraPage;
