const citas = [
  {
    id: 1,
    patientId: 'Ejemplo123',
    dateTime: '15/11/2023',
    reason: 'Cita de ejemplo',
    status: 'pendiente',
    doctor: "pendiente",
  },
];

const guardarCita = (patientId, dateTime, reason) => {
  if (!patientId || !dateTime || !reason) {
    return { success: false, message: 'Todos los campos son obligatorios.' };
  }

  const nuevaCita = {
    id: citas.length + 1,
    patientId,
    dateTime,
    reason,
    status: 'pendiente',
   
  };

  citas.push(nuevaCita);

  return { success: true, message: 'Cita guardada con éxito.' };
};

const getCitas = () => {
  return citas;
};

const cambiarEstadoCita = (citaId, nuevoEstado, doctor) => {
  const cita = citas.find((c) => c.id === citaId);
  if (!cita) {
    return { success: false, message: 'Cita no encontrada.' };
  }

  if (nuevoEstado !== 'aceptada' && nuevoEstado !== 'rechazada' && nuevoEstado !== 'completada') {
    return { success: false, message: 'Estado no válido.' };
  }

  cita.status = nuevoEstado;

  if (nuevoEstado === 'aceptada') {
    cita.doctor = doctor;
  }

  return { success: true, message: `Estado de la cita ${citaId} cambiado a ${nuevoEstado}.` };
};
export { guardarCita, getCitas, cambiarEstadoCita };

