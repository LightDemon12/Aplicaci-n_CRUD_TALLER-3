const medicinas = [
    {
        id: 1,
        nombre: 'Paracetamol',
        descripcion: 'Medicamento para el dolor',
        precio: 10,
        cantidad: 7,
    },
    {
        id: 2,
        nombre: 'Ibuprofeno',
        descripcion: 'Medicamento para el dolor',
        precio: 200,
        cantidad: 5,
    },
    {
        id: 3,
        nombre: 'Aspirina',
        descripcion: 'Medicamento para el dolor y la fiebre',
        precio: 5,
        cantidad: 5,
    },
    {
        id: 4,
        nombre: 'Amoxicilina',
        descripcion: 'Antibiótico para infecciones',
        precio: 15,
        cantidad: 5,
    },
    {
        id: 5,
        nombre: 'Loratadina',
        descripcion: 'Antihistamínico para alergias',
        precio: 8,
        cantidad: 5,
    },
    {
        id: 6,
        nombre: 'Omeprazol',
        descripcion: 'Medicamento para el reflujo ácido',
        precio: 12,
        cantidad: 5,
    }
    
]

const getMedicinas = () => {
    return medicinas
}

export { getMedicinas }