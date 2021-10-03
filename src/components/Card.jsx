import React from 'react';
import './cards.css'


function Card({nombre, rut}) {
    
    return(
        <div className="card text-center bg-dark">
            <div className="card-body text-primary text-light">
                <h4 className="card-title"> {nombre}  </h4>
                <p className="card-text text-secondary text-light">
                    {rut}
                </p>
                <p className="card-text text-secondary text-light">
                    Pequeña descripción con fin de que se vea un textito aquí uwu
                </p>
                <button  className="bn4">Ver</button>
            </div>
            
            </div>
        )

    }


export default Card;