import React, { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { limpiarDetalle, traerDetalle } from "../../actions";
import style from "./Detalle.module.css";

function Detalle(props) {
  // console.log(props);
  const id = props.match.params.id;
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(traerDetalle(id));
    return () => {
      dispatch(limpiarDetalle(dispatch));
    };
  }, [dispatch, id]);

  const pais = ReactRedux.useSelector((state) => state.paisDetalle);

  return (
    <div className={style.divPrincipal}>
      {pais.nombre && (
        <div className={style.divDetalle}>
          <div className={style.detalles}>
            <img alt={pais.nombre} src={pais.bandera} />
            <h3>CODIGO: {pais.id}</h3>
            <h3>PAIS: {pais.nombre.toUpperCase()}</h3>
            <p>Continente: {pais.continente}</p>
            <p>Capital: {pais.capital}</p>
            <p>Subregion: {pais.subregion}</p>
            <p>Area: {pais.area} km2</p>
            <p>Poblacion: {pais.poblacion} habitantes</p>
          </div>
          <div className={style.actividades}>
            <h3>Actividades:</h3>
            {pais.actividads.length > 0 ? (
              pais.actividads.map((act) => (
                <div key={act.id} className={style.act}>
                  <p>Nombre: {act.nombre.toUpperCase()}</p>
                  <p>Dificultad: {act.dificultad}</p>
                  <p>
                    Duracion:{" "}
                    {act.duracion <= 60
                      ? `${act.duracion} min`
                      : "Mas de 1 hora"}
                  </p>
                  <p>Temporada: {act.temporada.toUpperCase()}</p>
                </div>
              ))
            ) : (
              <div>No registradas</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detalle;
