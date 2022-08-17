import React from "react";
import style from "./Carta.module.css";
import { Link } from "react-router-dom";

function Carta({ nombre, img, continente, id }) {
  return (
    <div className={style.carta}>
      <img alt={nombre} src={img} className={style.imagen}/>
      <Link to={`/home/pais/${id}`} className={style.link}>
        <h2>{nombre.toUpperCase()}</h2>
      </Link>

      <h3>REGION: {continente.includes("America") ? "America" : continente}</h3>
    </div>
  );
}

export default Carta;
