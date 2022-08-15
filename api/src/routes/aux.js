const axios = require("axios");

//Creo un archivo auxiliar para traer los paises de la api
async function traerPaises() {
  const respuesta = await axios.get("https://restcountries.com/v3/all");

  //una vez que los traigo les hago un map para dejar solo los datos que me interesan
  const paises = respuesta.data.map((pais) => {
    return {
      id: pais.cca3,
      nombre: pais.name.common,
      bandera: pais.flags[0],
      continente: pais.continents[0],
      capital: pais.capital ? pais.capital[0] : "No definida",
      subregion: pais.subregion ? pais.subregion[0] : "No definida",
      area: pais.area,
      poblacion: pais.population,
    };
  });

  //devuelvo los paises ya con la informacion que me interesa
  return paises;
}

// traerPaises();

module.exports = {
  traerPaises,
};
