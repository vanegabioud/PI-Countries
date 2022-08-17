const { Router } = require("express");
const { Actividad, Country } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  const { nombre, dificultad, duracion, temporada, paises } = req.body; //para traer los datos del body

  try {
    //pregunto si estan los datos que necesito
    if (!nombre || !dificultad || !duracion || !temporada || !paises) {
      //si no estan devuelvo un mensaje de error
      return res.status(404).send("Error en alguno de los datos provistos");
    }

    //pregunto si la dificultad es de 1 a 5
    if (dificultad < 0 || dificultad > 5) {
      //sino devuelvo el error
      return res.status(404).send("La dificultad debe estar entre 1 y 5");
    }

    //me fijo si la actividad existe con los datos del body o la creo
    const [nvAct, creada] = await Actividad.findOrCreate({
      where: {
        nombre,
        dificultad,
        duracion,
        temporada,
      },
    });

    //busco los paises que coincidan con lo que pasan por body
    const paisesParaAct = await Country.findAll({
      where: {
        nombre: paises,
      },
    });

    //le añado los paises a la actividad
    await nvAct.addCountries(paisesParaAct);

    //devuelvo la actividad
    return res.status(201).json(nvAct);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const todasActividades = await Actividad.findAll({
      include: {
        model: Country,
        attributes: ["id", "nombre", "bandera", "continente","poblacion", "area", "subregion", "capital"],
        trhough: {
          attributes: [],
        },
      },
    });

    if (!todasActividades.length) {
      return res.status(404).send("No hay actividades registradas");
    }

    res.status(200).send(todasActividades);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
