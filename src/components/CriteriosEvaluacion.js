import React, { useState } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2';



const CriteriosEvaluacion = () => {

    const [titulo, setTitulo] = useState ("");
    const [descripcion, setDescripcion] = useState ("");
    const [data, setData] = useState([]);


    const formularioEvaluacion = () => {
        Axios.post('http://localhost:4000/add-evaluacion', {
          titulo: titulo, 
          descripcion: descripcion,
        }).then((response) => {
            console.log(response)
            if(response.data.message!=null){
                eventoClick();
            }
          });
    }
    const eventoClick = () =>{
        Swal.fire({
            title: 'Genial!',
            text: 'Se guardo correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
    }
    const MostrarDatos = () =>{
        Axios.post('http://localhost:4000/add-evaluacion-1',).then((response) => {
            setData(response.data);
            });
    }

    return (
        <div>
            <h1>Criterios de Evaluacion</h1>
            <div className="formulario">
                <label >Titulo</label>
                <input type="text"  placeholder="Escribe un titulo..." onChange={(e) => { 
                setTitulo(e.target.value);
                }}/>
                <label >Descripción</label>
                <textarea placeholder="Ingresa el criterio de evaluación... " maxLength={500} onChange={(e) => { 
                setDescripcion(e.target.value);
                }}></textarea>
                
                <button className="bn5" onClick={formularioEvaluacion} > Guardar </button>
            </div>
            <hr></hr>
            <button className="bn5" onClick={MostrarDatos} > Mostrar </button>
            <hr></hr>
                    <table className="alinear">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                    {data.map((user) => (
                    // display a <div> element with the user.name and user.type
                    // parent element needs to have a unique key

                        <tbody  key={user.id}>
                            <tr>
                                <td>{user.titulo}</td>
                                <td>{user.descripcion}</td>
                            </tr>
                        </tbody>
                    

                    
                    ))}
                    </table>

        </div>

    )
}

export default CriteriosEvaluacion;
