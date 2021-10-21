import './styles/css/dashboard-style.css';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import Cards from './Cards';

export default function Dashboard() {
    //Crear dashboard/empresa/#/
    let history = useHistory();

    function redireccionEmpresa() {
        history.push("/diagnostico");
    }

    const [datos, setData] = useState("");

    function MostrarDatos() {
        setData(
            <Cards />
        )
    }

    return (
        <div>
            <br />
            <h1>Aplicaciones Gestor</h1>
            <hr></hr>
            <div className="herramientas">
                <h2>Herramientas</h2>
                <hr></hr>
                <table>
                    <thead>
                        <tr><td><button className="bn5" onClick={redireccionEmpresa}>Agregar Empresa</button></td></tr>
                        <tr><td><button className="bn5" onClick={MostrarDatos}>Mostrar Empresas</button></td></tr>
                    </thead>
                </table>
            </div>
            {/* <div>
                <section>
                    <div className="table table-bordered table-hover table-dark ">
                        <thead>
                            <tr>
                                <th scope="col">
                                    Nombre
                                </th>
                                <th scope="col">
                                    Rut
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Diego Lopez
                                </td>
                                <td>
                                    20419463-7
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Diego Lopez
                                </td>
                                <td>
                                    20419463-7
                                </td>
                            </tr>
                        </tbody>
                    </div>
                </section>
            </div> */}
        </div>
    )
}
