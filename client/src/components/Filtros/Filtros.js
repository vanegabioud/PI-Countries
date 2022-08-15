import React, { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { filtroAct, filtroCont, orden, traerActividades } from "../../actions";

function Filtros({ setPagina, setOrden }) {
  const dispatch = ReactRedux.useDispatch();
  useEffect(() => {
    dispatch(traerActividades());
  });

  const actividades = ReactRedux.useSelector((state) => state.actividades);

  const continentes = (e) => {
    e.preventDefault();
    dispatch(filtroCont(e.target.value));
    setPagina(0);
  };
  const activ = (e) => {
    e.preventDefault();
    dispatch(filtroAct(e.target.value));
    setPagina(0);
  };

  const ordenar = (e) => {
    e.preventDefault();
    dispatch(orden(e.target.value));
    setOrden(e.target.value);
    setPagina(0);
  };

  return (
    <div>
      <select onChange={(e) => continentes(e)}>
        <option value="all">Continente</option>
        <option value="all">Todos</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Antarctica">Antartida</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select onChange={(e) => activ(e)}>
        <option value="all">Actividades</option>
        {actividades.length > 0 ? (
          actividades.map((act) => (
            <option key={act.id} value={act.nombre}>
              {act.nombre}
            </option>
          ))
        ) : (
          <option value="all">Sin registros</option>
        )}
      </select>
      <select onChange={(e) => ordenar(e)}>
        <option value="all">Orden por</option>
        <option value="Abc Asc">Abc Asc</option>
        <option value="Abc Desc">Abc Desc</option>
        <option value="Poblacion Asc">Poblacion Asc</option>
        <option value="Poblacion Desc">Poblacion Desc</option>
      </select>
    </div>
  );
}

export default Filtros;
