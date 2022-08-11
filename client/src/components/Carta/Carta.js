import React from 'react';
import style from "./Carta.module.css"

function Carta({nombre, img, continente}) {
  return (
    <div className={style.carta}>
      <h2>{nombre}</h2>
      <img alt={nombre} src={img}/>
      <h3>{continente}</h3>

    </div>
  )
}

export default Carta