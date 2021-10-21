import React, { useState, useEffect } from 'react';
import Card from './Card';
import Axios from 'axios';


function Cards() {


    const [data, setData] = useState([]);
    
    useEffect(() => {
        Axios.post('http://localhost:4000/add-diagnostico-1',).then((response) => {
            setData(response.data);
            });
    },
    [])
    
    let info = [
        {
            id: "",
            nombre: "",
            rut: "",
            giro: "",
            direccion: "",
            email: "",
            telefono: "",
            cargo: "",
            dotacion: ""
        }
    ]

    return (
        
        <div className="container justify-content-center align-items-center">
            <div className="row">
                {
                    data.map(datos => (
                        info.id = (datos.idEmpresas),
                        info.nombre = (datos.NombreEmpresa),
                        info.rut = (datos.RutEmpresa),

                        <div className="col-md-3" key={info.id}>
                            <Card
                                nombre={info.nombre}
                                rut={info.rut}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards;