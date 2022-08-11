import { PONER_PAISES } from "../actions";

const initial_state= {
    paises: [],
    pais: []
}

export function reducer (state= initial_state,{type, payload}){
    switch(type){
        case PONER_PAISES:{
            return {
                ...state,
                paises: payload
            } 
        }
        default:{
            return state
        }
    }
}

export default reducer;