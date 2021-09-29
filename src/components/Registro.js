import React, { useState } from "react";
import Axios from "axios";

const Registro = () => {

    const [usernameReg, setUsernameReg] = useState ("");
    const [passwordReg, setPasswordReg] = useState ("");


    const register = () => {
        Axios.post('http://localhost:4000/register', {
          username: usernameReg, 
          password: passwordReg,
      }).then((response) => {
        console.log(response)
      });
    }
    
    return (
        <div>
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
                <br/>
                <button className="custom-btn btn-11" onClick={register}> Registrarse </button>
            </div>
        </div>
    )
}

export default Registro;
