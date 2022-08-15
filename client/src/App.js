import "./App.css";
import Home from "./components/home/Home";
import { Route } from "react-router-dom";
import Nueva from "./components/Nueva/Nueva";
import Inicio from "./components/Inicio/Inicio";
import Detalle from "./components/Detalle/Detalle";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Route path={"/home"} component={Nav} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/home/nueva"} component={Nueva} />
      <Route exact path={"/"} component={Inicio} />
      <Route exact path={"/home/pais/:id"} component={Detalle} />
    </div>
  );
}

export default App;
