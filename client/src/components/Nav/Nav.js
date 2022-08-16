import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

function Nav() {
  return (
    <nav className={style.navbar}>
      <Link to={"/"} className={style.link}>
        Inicio
      </Link>
      <Link to={"/home"} className={style.link}>
        Home
      </Link>
      <Link to={"/home/nueva"} className={style.link}>
        Nueva Actividad
      </Link>
    </nav>
  );
}

export default Nav;
