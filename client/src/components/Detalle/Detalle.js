import React, { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { limpiarDetalle, traerDetalle } from "../../actions";

function Detalle(props) {
  // console.log(props);
  const id = props.match.params.id;
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(traerDetalle(id));
    return ()=>{
      dispatch(limpiarDetalle(dispatch))
    };
  }, [dispatch, id]);

  const pais = ReactRedux.useSelector((state) => state.paisDetalle);

  return (
    <div>
      {pais.nombre && <div>
        <h3>codigo: {pais.id}</h3>
      <h3>Pais: {pais.nombre.toUpperCase()}</h3>
      <img alt={pais.nombre} src={pais.bandera} />
      <p>Continente: {pais.continente}</p>
      <p>Capital: {pais.capital}</p>
      <p>Subregion: {pais.subregion}</p>
      <p>{pais.area} km2</p>
      <p>{pais.poblacion} habitantes</p>
      <div>
        Actividades: 
        {pais.actividads.length > 0 ? (
          pais.actividads.map((act) => <div key={act.id}>
          <p>Nombre: {act.nombre}</p>
          <p>Dificultad: {act.dificultad}</p>
          <p>Duracion: {act.duracion} min</p>
          <p>Temporada: {act.temporada}</p>
          </div>
          )
          
        ) : (
          <div>No registradas</div>
        )}
      </div>
      </div>}
    </div>
  );
}

export default Detalle;
