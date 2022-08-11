import React, { useEffect } from 'react';
import * as ReactRedux from "react-redux"
import { traerPaises } from '../../actions';
import Carta from '../Carta/Carta';
import style from "./Home.module.css"

function Home() {
    const dispatch= ReactRedux.useDispatch()

    useEffect(()=>{
       dispatch(traerPaises()) 
    }, [dispatch])

    const paises= ReactRedux.useSelector(state=>state.paises)

  return (
    <div className={style.home}>
        {paises.map((pais, i)=><Carta nombre={pais.nombre} img={pais.bandera} continente={pais.continente} key={i}/>)}
    </div>
  )
}

export default Home