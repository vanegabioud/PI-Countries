export const ordenamientoPor = (tipo, array) => {
  switch (tipo) {
    case "Abc Asc": {
      return array.sort((a, b) =>
        a.nombre < b.nombre ? -1 : +(a.nombre > b.nombre)
      );
    }
    case "Abc Desc": {
      return array.sort((a, b) =>
        a.nombre > b.nombre ? -1 : +(a.nombre < b.nombre)
      );
    }
    case "Poblacion Asc": {
      return array.sort((a, b) =>
        a.poblacion > b.poblacion ? -1 : +(a.poblacion < b.poblacion)
      );
    }
    case "Poblacion Desc": {
      return array.sort((a, b) =>
        a.poblacion < b.poblacion ? -1 : +(a.poblacion > b.poblacion)
      );
    }
    default: {
      return array;
    }
  }
};
