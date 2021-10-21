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
import PrivateRouters from "./components/routers/PrivateRouters";
import AuthProvider from "./auth/AuthProvider";
import Navbar from "./components/Navbar";
import PublicRouters from "./components/routers/PublicRouters";



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
          <Switch>
            <PrivateRouters exact path="/puestotrabajo" component={PuestoTrabajo}/>
            <PublicRouters exact path="/registro" component={Registro}/>
            <PrivateRouters exact path="/dashboard" component={Dashboard} />
            <PublicRouters exact path="/login" component={Login}/>
            <PrivateRouters exact path="/add-evaluacion" component={CriteriosEvaluacion}/>
            <PrivateRouters exact path="/diagnostico" component={Diagnostico}/>
            <Route exact path="/"><Inicio /></Route>
            <Route path="*"><h1>Error 404</h1></Route>
          </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
