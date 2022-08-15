import React from 'react';
import {Link} from "react-router-dom";
import style from "./Nav.module.css"

function Nav() {
  return (
    <nav className={style.navbar}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/home/nueva"}>Nueva Actividad</Link>
    </nav>
  )
}

export default Nav