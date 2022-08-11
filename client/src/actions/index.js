import axios from "axios";

export const PONER_PAISES = "PONER_PAISES";

export const ponerPaises = (data) => {
  return {
    type: PONER_PAISES,
    payload: data,
  };
};

export const traerPaises = () => {
  return async(dispatch) => {
    const paises= await axios.get("http://localhost:3001/countries");
    dispatch(ponerPaises(paises.data) )
  };
};
