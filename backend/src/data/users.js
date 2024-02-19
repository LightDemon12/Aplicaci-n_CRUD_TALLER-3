const users = [
    // Doctores
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'López',
      username: 'doctor1',
      birthDate: '1990-01-01',
      genre: 'M',
      password: 'doctor1pass',
      phone: '12345678',
      role: 'doctor'
    },
    {
      id: 2,
      firstName: 'Ana',
      lastName: 'López',
      username: 'nurse1',
      birthDate: '1990-01-01',
      genre: 'F',
      password: 'nurse1pass',
      phone: '12345678',
      role: 'nurse'
    },
    // Nuevo doctor
    {
      id: 3,
      firstName: 'Carlos',
      lastName: 'González',
      username: 'doctor2',
      birthDate: '1985-03-15',
      genre: 'M',
      password: 'doctor2pass',
      phone: '98765432',
      role: 'doctor'
    },
    // Nueva enfermera
    {
      id: 4,
      firstName: 'Luisa',
      lastName: 'Martínez',
      username: 'nurse2',
      birthDate: '1995-06-10',
      genre: 'F',
      password: 'nurse2pass',
      phone: '54321678',
      role: 'nurse'
    },
    {
      id: 4,
      firstName: 'Luisa',
      lastName: 'Martínez',
      username: '1',
      birthDate: '1995-06-10',
      genre: 'F',
      password: '1',
      phone: '54321678',
      role: 'patient'
    }
  ];
  
  const findUser = (username, password) => {
    return users.find(user => user.username === username && user.password === password);
  };
  
  const getPatiens = () => {
    return users.filter(user => user.role === 'patient');
  };
  
  const registerPatient = (newPatient) => {
   
  
    const { firstName, lastName, username, birthDate, genre, password, phone } = newPatient;
  
    if (!firstName || !lastName || !username || !birthDate || !genre || !password) {
      return { success: false, message: 'Todos los campos son obligatorios.' };
    }
  
    if (users.some(user => user.username === username)) {
      return { success: false, message: 'El nombre de usuario ya está en uso.' };
    }
  
    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      username,
      birthDate,
      genre,
      password,
      phone,
      role: 'patient'
    };
  
   
    users.push(newUser);
  
    return { success: true, message: 'Usuario registrado con éxito.' };
  };
  function modifyUser(username, updates) {
    
    const user = users.find((user) => user.username === username);
  
    if (!user) {
      return { success: false, message: "Usuario no encontrado." };
    }
  
    if (updates.nombre) {
      user.firstName = updates.nombre;
    }
    if (updates.apellido) {
      user.lastName = updates.apellido;
    }
    if (updates.fechaNacimiento) {
      user.birthDate = updates.fechaNacimiento;
    }
    if (updates.contraseña) {
      user.password = updates.contraseña;
    }
  
    return { success: true, message: "Usuario modificado con éxito." };
  }
  
  
  
  export { users, findUser, getPatiens, registerPatient, modifyUser };
  
  
  
  
  