import React, { useState } from "react";
import * as ReactRedux from "react-redux";
import { buscarApi, traerPaises } from "../../actions";

function Buscar({ setPagina }) {
  const dispatch = ReactRedux.useDispatch();
  const [buscar, setBuscar] = useState("");
  const busqueda = (e) => {
    e.preventDefault();
    setBuscar(e.target.value);
  };

  const enviar = (e) => {
    e.preventDefault();
    if (buscar) {
      dispatch(buscarApi(buscar));
      setPagina(0);
    }
    if (!buscar) {
      alert("Debe colocar un nombre");
      dispatch(traerPaises());
    }
    setBuscar("");
  };
  return (
    <form onSubmit={(e) => enviar(e)}>
      <input
        type="text"
        placeholder="Nombre del pais..."
        value={buscar}
        onChange={(e) => busqueda(e)}
      />
      <button type="submit" onClick={(e) => enviar(e)}>
        Buscar
      </button>
    </form>
  );
}

export default Buscar;
