'use client'

function DoctorPage () {

    const { firstName, id } = JSON.parse(localStorage.getItem('user'))

    return (
       
        <div>
            <h1>Bienvenido doctor: {firstName} con id:{id}</h1>
        </div>
    )
}

export default DoctorPage