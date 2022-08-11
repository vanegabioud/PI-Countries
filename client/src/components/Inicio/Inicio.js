import React from 'react'

function Inicio(props) {


  return (
    <div>Inicio

      <button onClick={()=> props.history.push("/home")}>ir al home</button>
    </div>
  )
}

export default Inicio