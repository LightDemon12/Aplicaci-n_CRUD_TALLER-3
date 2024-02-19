import express from 'express'
import { findUser, getPatiens, registerPatient,modifyUser } from './data/users.js'
import { getMedicinas } from './data/medicinas.js'
import { agregarCompraDeMedicina,getAllCompras,eliminarTodasLasCompras,agregarReceta,getRecetas    } from './data/recetas.js'

import { guardarCita, getCitas, cambiarEstadoCita } from './data/citas.js';
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hola')
})

router.post('/login', (req, res) => {
 

    const { username, password } = req.body

    const user = findUser(username, password)

    if (user) {
        res.json({ message: 'Usuario logueado con éxito', user })
    } else {
        res.status(401).json({ message: 'Usuario o contraseña incorrectos' })
    }
})

router.get('/patients', (req, res) => {
    const patients = getPatiens()
    res.json(patients)
})
router.get('/recetasfinal', (req, res) => {
    const recetas = getRecetas()
    res.json(recetas); 
  });

router.post('/addres', (req, res) => {
    const { receta } = req.body;

    if (receta) {
        agregarReceta(receta);
        res.json({ message: 'Receta agregada exitosamente' });
    } else {
        res.status(400).json({ error: 'Falta la información de la receta' });
    }
});
router.get('/compras', (req, res) => {
    const compras = getAllCompras();
    res.json(compras);
});
router.get('/eliminar', (req, res) => {
    eliminarTodasLasCompras();
    res.json({ message: 'Todas las compras han sido eliminadas' });
});

router.get('/citas', (req, res) => {
    const citas = getCitas()
    res.json(citas)
})


router.get('/medicinas', (req, res) => {
    const medicinas = getMedicinas()
    res.json(medicinas)
})

router.post('/compra-medicina', (req, res) => {
    const { idMedicina, cantidad, idPaciente, nombreMedicina, precioMedicina } = req.body;

    
    agregarCompraDeMedicina({
        idMedicina,
        cantidad,
        idPaciente,
        nombreMedicina,
        precioMedicina, 
    });

    res.status(200).json({ message: 'Medicina comprada con éxito' });
});



router.post('/register-patient', (req, res) => {
    const newPatientData = req.body; 
  
    const result = registerPatient(newPatientData);
  
    res.json(result);
  });
  router.post('/modify-patient/:username', (req, res) => {
    const username = req.params.username; 
    const updates = req.body; 
  
    const result = modifyUser(username, updates);
  
    res.json(result);
  });
  
  router.post('/guardar-cita', (req, res) => {
    const { patientId, dateTime, reason } = req.body;
  
    const result = guardarCita(patientId, dateTime, reason);
  
    res.json(result);
  });
  
  router.post('/cambiar-cita', (req, res) => {
    const { citaId, nuevoEstado } = req.body;
  
    const result = cambiarEstadoCita(citaId, nuevoEstado);
  
    res.json(result);
  });
  
  
  

export default router