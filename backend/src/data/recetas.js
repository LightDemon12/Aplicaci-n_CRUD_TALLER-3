const recetas = [];

const medicinasCompradas = [];

const agregarReceta = (receta) => {
    recetas.push(receta);
};

const agregarCompraDeMedicina = (compra) => {
    medicinasCompradas.push(compra);
};

const eliminarTodasLasCompras = () => {
    medicinasCompradas.length = 0;
};

const getAllCompras = () => {
    return medicinasCompradas;
};
const getRecetas = () => {
    return recetas;
  };
  
export { agregarCompraDeMedicina, agregarReceta, eliminarTodasLasCompras, recetas, getAllCompras,getRecetas  };
