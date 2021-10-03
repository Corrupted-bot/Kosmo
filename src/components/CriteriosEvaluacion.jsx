import React, { useState } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

const CriteriosEvaluacion = () => {
    //Variables de entorno para capturar los datos del input 
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");


    // Variables necesarias para la redireccion
    let history = useHistory();

    function handleClick() {
        history.push("/dashboard");
    }

    const eventoClick = () => {
        Swal.fire({
            title: 'Genial!',
            text: 'Se guardo correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }
    const formularioEvaluacion = () => {
        Axios.post('http://localhost:4000/add-evaluacion', {
            titulo: titulo,
            descripcion: descripcion,
        }).then((response) => {
            console.log(response)
            if (response.data.message != null) {
                //Eventos si la peticion al servidor es correta
                eventoClick();
                handleClick();
            }//falta una por si la peticion no es posible error 404
        });
    }

    return (
        <div>
            <h1>Criterios de Evaluacion</h1>
            <div className="formulario">
                <label >Titulo</label>
                <input type="text" placeholder="Escribe un titulo..." onChange={(e) => {
                    setTitulo(e.target.value);
                }} />
                <label >Descripción</label>
                <textarea placeholder="Ingresa el criterio de evaluación... " maxLength={500} onChange={(e) => {
                    setDescripcion(e.target.value);
                }}></textarea>

                <button className="bn5" onClick={formularioEvaluacion} > Guardar </button>
            </div>
            {/* <hr></hr>
            <button className="bn5" onClick={MostrarDatos} > Mostrar </button>
            <hr></hr>
            {tablaFuncion()} */}

        </div>

    )
}

export default CriteriosEvaluacion;
