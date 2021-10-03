import React from "react";
import './App.css';

//Componentes
import Login from "./components/Login";
import Registro from "./components/Registro";
import Inicio from "./components/Inicio";
import CriteriosEvaluacion from "./components/CriteriosEvaluacion";
import Diagnostico from "./components/Diagnostico";
import Dashboard from "./components/Dashboard";
import PuestoTrabajo from "./components/PuestoTrabajo";
// Pack install 
// npm install react-router-dom

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";



function App() {

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        {/* <a class="navbar-brand "><img width="70" height="70" src="http://kosmoinclusion.cl/wp-content/uploads/2019/04/logo-kosmo-1.png"/></a> */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink to="/" className="btn btn-dark" activeClassName="disable" >Inicio</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/login" className="btn btn-dark"  activeClassName="active">Iniciar Sesion</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/registro" className="btn btn-dark" activeClassName="active">Registro</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/diagnostico" className="btn btn-dark" activeClassName="active">Diagnostico</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/add-evaluacion" className="btn btn-dark" activeClassName="active">Criterios de Evaluacion</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/puestotrabajo" className="btn btn-dark" activeClassName="active">Puesto de Trabajo</NavLink>
              </li>
            </ul>
          </div>
        </div>  
      </nav>
      <div className = "App App-header">
        <Switch>
        <Route path="/puestotrabajo"><PuestoTrabajo/></Route> 
          <Route path="/registro"><Registro/></Route>
          <Route path="/dashboard"><Dashboard/></Route>
          <Route path="/login" ><Login/></Route>
          <Route path="/add-evaluacion"><CriteriosEvaluacion/></Route>
          <Route path="/diagnostico"><Diagnostico/></Route>
          <Route path="/"><Inicio/></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
