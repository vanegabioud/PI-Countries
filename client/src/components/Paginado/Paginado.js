import React from "react";
import style from "./Paginado.module.css";

function Paginado({ pagina, setPagina, paises }) {
  const numeros = [];
  for (let i = 0; i < paises.length / 10; i++) {
    numeros.push(i);
  }

  const irA = (numero) => {
    if (numero === 0) {
      return setPagina(0);
    }
    setPagina(10 * numero);
  };

  const pagActual = (num) => {
    if (pagina / 10 === num ) {
      return "red";
    }
  };

  const sig = () => {
    if (pagina < paises.length - 10) {
      setPagina(pagina + 10);
    }
  };

  const atras = () => {
    if (pagina > 0) {
      setPagina(pagina - 10);
    }
  };
  return (
    <div className={style.divPaginado}>
      <button onClick={atras}>Atras</button>
      {numeros.length &&
        numeros.map((num, i) => (
          <button
            key={i}
            onClick={() => irA(num)}
            style={{ backgroundColor: pagActual(num) }}
          >
            {num + 1}
          </button>
        ))}
      <button onClick={sig}>Siguiente</button>
    </div>
  );
}

export default Paginado;
