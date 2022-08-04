const { Router } = require("express");
const { Country, Actividad } = require("../db"); //importo los modelos de la base de datos
const { traerPaises } = require("./aux"); //me traigo la funcion del archivo auxiliar para llamar los paises

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
  const { name } = req.query; //por si llega name por query
  try {
    //primero busco los paises en la base de datos
    const todosPaises = await Country.findAll();

    ///pregunto si tiene algo por primera vez con el .length
    if (!todosPaises.length) {
      //si no tiene nada llamo a la api con la funcion auxiliar
      const paisesApi = await traerPaises();

      //hago un map de cada pais para crearlos en la base de datos
      paisesApi.map(
        async (pais) =>
          await Country.create({
            id: pais.id,
            nombre: pais.nombre.toLowerCase(),
            bandera: pais.bandera,
            continente: pais.continente,
            capital: pais.capital,
            subregion: pais.subregion,
            area: pais.area,
            poblacion: pais.poblacion,
          })
      );

      //pregunto si llega name por query
      if (name) {
        //me fijo si esta dentro de los paises de la api (uso .includes porque no necesita ser busqueda exacta)
        const paisesPorNombre = paisesApi.filter((pais) =>
          pais.nombre.toLowerCase().includes(name.toLowerCase())
        );

        return paisesPorNombre.length
          ? res.status(200).send(paisesPorNombre) //si encuentra coincidencias las devuelvo
          : res.status(404).send(`No hay coincidencias para name=${name}`); //si no encuentra envio el error
      }

      //devuelvo los paises que traje de la api
      return res.status(200).send(paisesApi);
    }

    //si encontro los paises en la base de datos pregunto si viene name por query
    if (name) {
      //hago lo mismo y pregunto si hay coincidencias
      const paisesPorNombre = todosPaises.filter((pais) =>
        pais.nombre.includes(name.toLowerCase())
      );

      return paisesPorNombre.length
        ? res.status(200).send(paisesPorNombre)
        : res.status(404).send(`No hay coincidencias para name=${name}`);
    }
    //   console.log(todosPaises);
    //devuelvo todos los paises de la base de datos en el caso de que no este name
    res.status(200).send(todosPaises);
  } catch (error) {
    //en caso de error lo muestro en consola
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params; //para traer el id por params
  try {
    //verifico que el id tenga 3 digitos
    if (id.length !== 3) {
      //si no lo tiene envio el mensaje de error
      return res
        .status(404)
        .send("El identificador del pais debe ser de 3 digitos");
    }

    //si el id tiene 3 digitos busco el pais en la base de datos (como se guardo en mayusculas lo paso a mayusculas)
    const pais = await Country.findByPk(id.toUpperCase(), {
      include: { //le agrego el modelo de actividad con sus atributos
        model: Actividad,
        attributes: ["id", "nombre", "dificultad", "duracion", "temporada"],
        through: {
          attributes: [],
        },
      },
    });

    //me fijo si la busqueda trajo algo
    if (!pais) {
      //si no trae nada envio el mensaje de error
      return res
        .status(404)
        .send(`No existe pais con el identificador ${id} en los registros`);
    }

    //si lo trae lo devuelvo
    res.status(200).send(pais);
  } catch (error) {
    console.log(error);
  }
});

//exporto la ruta para usarlo en app con el .use
module.exports = router;
