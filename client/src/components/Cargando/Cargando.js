import React from "react";
import style from "./Cargando.module.css";
import mundo from "../Img/GIF_Mundo_Banderas.gif";

function Cargando() {
  return (
    <div className={style.princi}>
      <img alt="cargando" src={mundo} />
      <h1>Cargando</h1>
    </div>
  );
}

export default Cargando;
