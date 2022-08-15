import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { traerPaises } from "../../actions";
import Filtros from "../Filtros/Filtros";
import Buscar from "../Buscar/Buscar";
import Carta from "../Carta/Carta";
import Paginado from "../Paginado/Paginado";
import style from "./Home.module.css";

function Home() {
  const dispatch = ReactRedux.useDispatch();

  const [pagina, setPagina] = useState(0);
  const [orden, setOrden] = useState("");

  useEffect(() => {
    dispatch(traerPaises());
  }, [dispatch]);

  const paises = ReactRedux.useSelector((state) => state.paises);

  const paisPag = paises.slice(pagina, pagina + 10);

  return (
    <div className={style.home}>
      {paises.length > 0 ? (
        <div>
          <Filtros setPagina={setPagina} setOrden={setOrden} />
          <Buscar setPagina={setPagina} />
        </div>
      ) : (
        <div></div>
      )}
      <div className={style.paises}>
        {pagina === 0
          ? paises
              .slice(0, 9)
              .map((pais, i) => (
                <Carta
                  id={pais.id}
                  nombre={pais.nombre}
                  img={pais.bandera}
                  continente={pais.continente}
                  key={i}
                />
              ))
          : paisPag.map((pais, i) => (
              <Carta
                id={pais.id}
                nombre={pais.nombre}
                img={pais.bandera}
                continente={pais.continente}
                key={i}
              />
            ))}
      </div>
      {paises.length > 0 ? (
        <Paginado pagina={pagina} setPagina={setPagina} paises={paises} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Home;
