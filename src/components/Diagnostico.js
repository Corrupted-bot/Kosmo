import axios from "axios";
import React , { useState }from "react";


//import Axios from "axios";

const Diagnostico = () => {

    const[nombreEmpresa, setNombreEmpresa] = useState("");

    const[rutEmpresa, setrutEmpresa] = useState("");

    const[giroEmpresa, setgiroEmpresa] = useState("");

    const[direccionEmpresa, setdireccionEmpresa] = useState("");

    const[mailEmpresa,  setmailEmpresa] = useState("");

    const[telefonoEmpresa,  settelefonoEmpresa] = useState("");

    const[cargoEmpresa, setcargoEmpresa] = useState("");

    const[dotacionEmpresa,  setdotacionEmpresa] = useState("");

   
    const registerr = () => {
        axios.post('http://localhost:4000/diagnostico', {
          username: nombreEmpresa,
          rut: rutEmpresa,
          giro: giroEmpresa,
          direccion: direccionEmpresa,
          mail: mailEmpresa,
          telefono: telefonoEmpresa,
          cargo: cargoEmpresa,
          dotacion: dotacionEmpresa, 
          
      }).then((response) => {
        console.log(response)
      });
    }

    return (
        
        <>
        <div className = "diagnostico">
            <h1> Agregar Empresa </h1>
            
            <input type = "text" placeholder = "Nombre empresa"
              onChange={(e) => { 
                setNombreEmpresa(e.target.value);
                }}
              
              /> 
            <br/>

            <input type = "text" placeholder = "Rut Empresa"
              onChange={(e) => { 
                setrutEmpresa(e.target.value);
                }}
              
              /> 
              <br/>

            <input type = "text" placeholder = "Giro Empresa"
              onChange={(e) => { 
                setgiroEmpresa(e.target.value);
                }}
              
              /> 
              <br/>

            <input type = "text" placeholder = "Direccion Empresa"
              onChange={(e) => { 
                setdireccionEmpresa(e.target.value);
                }}
              
              /> 
            <br/>
            <input type = "text" placeholder = "Mail Empresa"
              onChange={(e) => { 
                setmailEmpresa(e.target.value);
                }}
              
              /> 

                <br/>
            <input type = "text" placeholder = "Telefono Empresa"
              onChange={(e) => { 
                settelefonoEmpresa(e.target.value);
                }}
              
              /> 

                <br/>

            <input type = "text" placeholder = "Cargo Empresa"
              onChange={(e) => { 
                setcargoEmpresa(e.target.value);
                }}
              
              /> 

                <br/>
            <input type = "text" placeholder = "Dotacion Empresa"
              onChange={(e) => { 
                setdotacionEmpresa(e.target.value);
                }}
              
              /> 

            <br/>

              <button className = "custom-btn btn-11"  onClick={registerr}> Agregar           </button>
        </div>
        </>
    );
}


export default Diagnostico;