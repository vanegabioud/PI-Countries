import axios from "axios";

export const PONER_PAISES = "PONER_PAISES";
export const PONER_DETALLE = "PONER_DETALLE";
export const LIMPIAR_DETALLE = "LIMPIAR_DETALLE";
export const BUSCAR_PAIS = "BUSCAR_PAIS";
export const SET_ACTIVIDADES = "SET_ACTIVIDADES";
export const FILTRO_CONT = "FILTRO_CONT";
export const FILTRO_ACT = "FILTRO_ACT";
export const ORDEN = "ORDEN";

export const ponerPaises = (data) => {
  return {
    type: PONER_PAISES,
    payload: data,
  };
};

export const traerPaises = () => {
  return async (dispatch) => {
    try {
      const paises = await axios.get("http://localhost:3001/countries");
      dispatch(ponerPaises(paises.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const ponerDetalle = (data) => {
  return {
    type: PONER_DETALLE,
    payload: data,
  };
};

export const traerDetalle = (id) => {
  return async (dispatch) => {
    try {
      const pais = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch(ponerDetalle(pais.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const limpiarDetalle = () => {
  return {
    type: LIMPIAR_DETALLE,
    payload: {},
  };
};

export const crearActividad = (data) => {
  try {
    const nuevaActividad = {
      nombre: data.nombre,
      dificultad: Number(data.dificultad),
      duracion: Number(data.duracion),
      temporada: data.temporada,
      paises: data.paises,
    };
    return async () => {
      // console.log(nuevaActividad)
      await axios.post("http://localhost:3001/activities", nuevaActividad);
    };
  } catch (error) {
    console.log(error);
  }
};

export const buscarPais = (pais) => {
  return {
    type: BUSCAR_PAIS,
    payload: pais,
  };
};

export const buscarApi = (busqueda) => {
  return async (dispatch) => {
    try {
      const pais = await axios.get(
        `http://localhost:3001/countries?name=${busqueda}`
      );
      dispatch(buscarPais(pais.data));
    } catch (error) {
      // console.log(error);
      alert(error.response.data);
      dispatch(traerPaises());
    }
  };
};

export const setActividades = (data) => {
  return {
    type: SET_ACTIVIDADES,
    payload: data,
  };
};

export const traerActividades = () => {
  return async (dispatch) => {
    try {
      const actividades = await axios.get("http://localhost:3001/activities");
      dispatch(setActividades(actividades.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const filtroCont = (continente) => {
  return {
    type: FILTRO_CONT,
    payload: continente,
  };
};

export const filtroAct = (actividad) => {
  return {
    type: FILTRO_ACT,
    payload: actividad,
  };
};

export const orden = (tipo) => {
  return {
    type: ORDEN,
    payload: tipo,
  };
};
