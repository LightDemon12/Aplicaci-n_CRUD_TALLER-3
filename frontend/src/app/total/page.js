'use client';

import React, { useEffect, useState } from "react";

function MedicinaItem({ medicina }) {
    const subtotal = medicina.precioMedicina * medicina.cantidad;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {medicina.idMedicina}
            </td>
            <td className="px-6 py-4">
                {medicina.nombreMedicina}
            </td>
            <td className="px-6 py-4">
                Q.{medicina.precioMedicina}
            </td>
            <td className="px-6 py-4">
                {medicina.cantidad}
            </td>
            <td className="px-6 py-4">
                Q.{subtotal}
            </td>
        </tr>
    );
}

function MedicinasCompradasPage() {
    const [medicinasCompradas, setMedicinasCompradas] = useState([]);
    const loggedUserId = 1;

    useEffect(() => {
        const fetchMedicinasCompradas = async () => {
            const response = await fetch(`http://localhost:4000/compras?userId=${loggedUserId}`);

            if (response.ok) {
                const data = await response.json();
                setMedicinasCompradas(data);
            }
        }

        fetchMedicinasCompradas();
    }, [loggedUserId]);

    
    const calcularPrecioTotal = () => {
        let total = 0;
        for (const medicina of medicinasCompradas) {
            total += medicina.precioMedicina * medicina.cantidad;
        }
        return total;
    };

    
    const eliminarTodasLasCompras = async () => {
        const response = await fetch('http://localhost:4000/eliminar', {
            method: 'POST',
        });

        if (response.ok) {
           
            setMedicinasCompradas([]);
         
            alert('Todas las compras han sido eliminadas con éxito.');
        } else {
           
            alert('Hubo un problema al eliminar las compras. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    
    const regresarAlMenuPrincipal = () => {
        window.location.href = '/patient';
    };

    return (
        <div>
            <h1>Medicinas Compradas por el Paciente</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID de Medicina
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre de Medicina
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subtotal
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicinasCompradas.map((medicina) => (
                            <MedicinaItem key={medicina.id} medicina={medicina} />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-center">
                <p className="text-lg font-semibold">
                    Total: Q.{calcularPrecioTotal()}
                </p>
               
                <button onClick={regresarAlMenuPrincipal} className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover-bg-blue-600 ml-4">
                    Regresar al Menú Principal
                </button>
            </div>
        </div>
    );
}

export default MedicinasCompradasPage;
