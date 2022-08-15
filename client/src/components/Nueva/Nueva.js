import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { crearActividad, traerPaises } from "../../actions";

function Nueva(props) {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(traerPaises());
  }, [dispatch]);

  const todosPaises = ReactRedux.useSelector((state) => state.paises);
  todosPaises.sort((a, b) =>
    a.nombre < b.nombre ? -1 : +(a.nombre > b.nombre)
  );

  const validador = (input) => {
    let noNumero = /^[A-Za-z]+$/;
    let error = {};
    if (!noNumero.test(input.nombre)) {
      error.nombre = "nombre solo acepta letras";
    }
    if (!input.nombre) {
      error.nombre = "nombre no puede estar vacio";
    }
    if (!input.paises.length) {
      error.paises = "al menos se necesita 1 pais";
    }
    return error;
  };

  const validoSelect = (input, evento) => {
    let error = "";
    let paises = input.paises;
    console.log(paises, evento);

    if (paises.length > 0) {
      if (paises.find((p) => p === evento)) {
        error = "Pais ya agregado";
      }
    }
    return error;
  };

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    nombre: "",
    dificultad: 1,
    duracion: 15,
    temporada: "otoño",
    paises: [],
  });

  const handleInputChange = (evento) => {
    evento.preventDefault();

    setErrors(
      validador({
        ...input,
        [evento.target.name]: evento.target.value,
      })
    );

    setInput({
      ...input,
      [evento.target.name]: evento.target.value,
    });
  };

  const quitar = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setInput({
      ...input,
      paises: input.paises.filter((p) => p !== e.target.value),
    });
  };

  console.log(input.paises);
  const handleSelect = (evento) => {
    evento.preventDefault();

    if (!validoSelect(input, evento.target.value)) {
      setErrors(
        validador({
          ...input,
          paises: [...input.paises, evento.target.value],
        })
      );

      setInput({
        ...input,
        paises: [...input.paises, evento.target.value],
      });
    } else {
      alert(validoSelect(input, evento.target.value));
    }
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (!errors.name && !errors.paises) {
      dispatch(crearActividad(input));
      alert("Actividad creada con exito");
      props.history.push("/home");
    } else {
      alert("Hubo un problema al crear la actividad, mirar el formulario");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>nombre</label>
      <input
        name="nombre"
        value={input.nombre}
        type="text"
        onChange={(e) => handleInputChange(e)}
      />
      {errors.nombre && <p>{errors.nombre}</p>}
      <label>dificultad</label>
      <select name="dificultad" onChange={(e) => handleInputChange(e)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <label>duracion</label>
      <select name="duracion" onChange={(e) => handleInputChange(e)}>
        <option value={15}>15min</option>
        <option value={30}>30min</option>
        <option value={45}>45min</option>
        <option value={60}>60min</option>
        <option value={90}>+60min</option>
      </select>
      <label>temporada</label>
      <select name="temporada" onChange={(e) => handleInputChange(e)}>
        <option value="otoño">otoño</option>
        <option value="invierno">invierno</option>
        <option value="primavera">primavera</option>
        <option value="verano">verano</option>
      </select>
      <label>paises</label>
      <select onChange={(e) => handleSelect(e)}>
        <option></option>
        {todosPaises.map((p, i) => (
          <option key={i} value={p.nombre}>
            {p.nombre}
          </option>
        ))}
      </select>
      <ul>
        {input.paises.map((pais, i) => (
          <li key={i} >
            {pais} <button value={pais} onClick={(e)=>quitar(e)}>x</button>
          </li>
        ))}
      </ul>
      {errors.paises && <p>{errors.paises}</p>}
      <button type="submit">CREAR</button>
    </form>
  );
}

export default Nueva;
