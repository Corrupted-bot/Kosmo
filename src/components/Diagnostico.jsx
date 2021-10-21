import axios from "axios";
import React , { useState }from "react";
import Cards from './Cards';
import './styles/css/empresa-style.css';


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
        <br></br>
        <h1> Agregar Empresa </h1>
        <hr></hr>
        <div className = "formulario formulario-2">
            
            <br/>
            <h2>Antecedentes de la organización</h2>
            <input type = "text" placeholder = "Nombre de la organización" onChange={(e) => {setNombreEmpresa(e.target.value);}}/> 
            <br/>
            <br/>
            <input type = "text" placeholder = "Rut organización" onChange={(e) => {setrutEmpresa(e.target.value);}}/> 
            <br/>
            <br/>
            <input type = "text" placeholder = "Giro organización" onChange={(e) => {setgiroEmpresa(e.target.value);}}/> 
            <br/>
            <br/>
            <input type = "text" placeholder = "Direccion de la organización" onChange={(e) => {setdireccionEmpresa(e.target.value);}}/> 
            <br/>
            <br/>
            <input type = "text" placeholder = "Email de la organización" onChange={(e) => {setmailEmpresa(e.target.value);}}/> 
            <br/>
            <br/>
            <input type = "text" placeholder = "Telefono de la organización" onChange={(e) => {settelefonoEmpresa(e.target.value);}}/> 
            <br/>
            <br/>
            <input type = "text" placeholder = "Cargo en la organización" onChange={(e) => {setcargoEmpresa(e.target.value);}}/> 
            <br/>
            <br/>
            <input type = "text" placeholder = "Dotacion en la organización" onChange={(e) => { setdotacionEmpresa(e.target.value);}}/> 
            <br/>
            <br/>
            <button className = "custom-btn btn-11"  onClick={registerr}> Agregar </button>
        </div>
        <div>
          <hr></hr>
          <div>
            <Cards/>
          </div>
        </div>
        </>
    );
  }     


export default Diagnostico;