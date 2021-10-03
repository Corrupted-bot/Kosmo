import React, { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

const Login = () => {
  // Variables de entorno para capturar los datos
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");


  // Variables necesarias para la redireccion
  let history = useHistory();

  function handleClick() {
    history.push("/dashboard");
  }

  //Peticion al servidor 
  const login = () => {
    Axios.post('http://localhost:4000/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: `Iniciaste Sesion: ${loginStatus}`
        })

        //Redireccionar si el usuario es correcto
        handleClick();
      }
    });
  }

  return (
    <div>
      <div className="login formulario">
        <h1> Iniciar Sesion </h1>
        <label> Usuario </label>
        <input type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }} />
        <label>Contraseña</label>
        <input type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }} />
        <br />
        <button className="custom-btn btn-11" onClick={login}> Entrar </button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  )
}

export default Login;
