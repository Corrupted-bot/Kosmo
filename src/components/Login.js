import React, { useState } from "react";
import Axios from "axios";

const Login = () => {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");
  
    const [loginStatus, setLoginStatus] = useState("");


    const login = () => {
        Axios.post('http://localhost:4000/login', {
          username: username, 
          password: password,
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].username);
          }
        });
    }

    return (
        <div>
            <div className = "login">
                <h1> Iniciar Sesion </h1>
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
                <br/>
                <button className="custom-btn btn-11" onClick={login}> Entrar </button>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    )
}

export default Login;
