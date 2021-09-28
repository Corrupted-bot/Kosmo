import React, { useState } from "react";
import Axios from "axios";
import './App.css';

function App() {

  const [usernameReg, setUsernameReg] = useState ("");
  const [passwordReg, setPasswordReg] = useState ("");

  const [username, setUsername] = useState ("");
  const [password, setPassword] = useState ("");

  const register = () => {
    Axios.post('http://localhost3001/register', {
      username: usernameReg, 
      password: passwordReg,
  }).then((response) => {
    console.log(response)
  });
}

const login = () => {
  Axios.post('http://localhost3001/login', {
    username: username, 
    password: password,
  }).then((response) => {
    console.log(response)
  });
}


  return (
    <div className = "App">
      <div className="registro">
        <h1> Registro </h1>
        <label> Usuario </label>
        <input type="text" 
        onChange={(e) => { 
          setUsernameReg(e.target.value);
         }}
          />
        <label> Contraseña </label>
        <input type="password" 
        onChange={(e) => { 
          setPasswordReg(e.target.value);
         }}/>
        <button onClick={register}> Registrarse </button>
      </div>
      <div className = "login">
        <h1> Login </h1>
        <label> Usuario </label>
        <input type="text" 
        onChange={(e) => { 
          setUsername(e.target.value);
         }}/>
        <label>Contraseña</label>
        <input type="password" 
        onChange={(e) => { 
          setPassword(e.target.value);
         }}/>
        <button onClick={login}> Entrar </button>
      </div>
    </div>
  );
}

export default App;
