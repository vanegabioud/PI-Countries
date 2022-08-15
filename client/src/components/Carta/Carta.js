import React from 'react';
import style from "./Carta.module.css"
import {Link} from "react-router-dom"

function Carta({nombre, img, continente, id}) {
  return (
    <div className={style.carta}>
      <Link to={`/home/pais/${id}`}><h2>{nombre}</h2></Link>
      
      <img alt={nombre} src={img}/>
      <h3>{continente}</h3>

    </div>
  )
}

export default Carta