import {
  BUSCAR_PAIS,
  FILTRO_ACT,
  FILTRO_CONT,
  LIMPIAR_DETALLE,
  ORDEN,
  PONER_DETALLE,
  PONER_PAISES,
  SET_ACTIVIDADES,
} from "../actions";
import { ordenamientoPor } from "./auxiliar";

const initial_state = {
  paises: [],
  paisesCopia: [],
  paisDetalle: {},
  actividades: [],
};

export function reducer(state = initial_state, { type, payload }) {
  switch (type) {
    case PONER_PAISES: {
      return {
        ...state,
        paises: payload,
        paisesCopia: payload,
      };
    }
    case PONER_DETALLE: {
      return {
        ...state,
        paisDetalle: payload,
      };
    }
    case LIMPIAR_DETALLE: {
      return {
        ...state,
        paisDetalle: payload,
      };
    }
    case BUSCAR_PAIS: {
      return {
        ...state,
        paises: payload,
      };
    }
    case SET_ACTIVIDADES: {
      return {
        ...state,
        actividades: payload,
      };
    }
    case FILTRO_CONT: {
      return {
        ...state,
        paises:
          payload === "all"
            ? state.paisesCopia
            : state.paisesCopia.filter((p) => p.continente.includes(payload)),
      };
    }
    case FILTRO_ACT: {
      return {
        ...state,
        paises:
          payload === "all"
            ? state.paisesCopia
            : state.actividades.filter((act) => act.nombre === payload)[0]
                .countries,
      };
    }
    case ORDEN: {
      return {
        ...state,
        paises: ordenamientoPor(payload, state.paises),
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
