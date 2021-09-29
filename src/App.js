import React from "react";
import './App.css';

//Componentes
import Login from "./components/Login";
import Registro from "./components/Registro";
import Inicio from "./components/Inicio";


// Pack install 
// npm install react-router-dom

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function App() {

  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
              <NavLink to="/" className="btn btn-dark" activeClassName="disable" >Inicio</NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/login" className="btn btn-dark"  activeClassName="active">Iniciar Sesion</NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/registro" className="btn btn-dark" activeClassName="active">Registro</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className = "App App-header">
        <Switch>
          <Route path="/registro"><Registro/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/"><Inicio/></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
