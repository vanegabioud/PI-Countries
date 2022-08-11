import "./App.css";
import Home from "./components/home/Home";
import { Route } from "react-router-dom";
import Nueva from "./components/Nueva/Nueva";
import Inicio from "./components/Inicio/Inicio";
import Detalle from "./components/Detalle/Detalle"


function App() {
  return (
    <div>
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/nueva"} component={Nueva} />
      <Route exact path={"/"} component={Inicio} />
      <Route exact path={"/home/:id"} component={Detalle} />
    </div>
  );
}

export default App;
