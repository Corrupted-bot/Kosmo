import { ButtonGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function Navbar() {
    const auth = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" exact className="btn btn-dark navbar-brand" activeClassName="active" >Inicio</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            {!auth.isLogged() && (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="btn btn-dark" activeClassName="active">Iniciar Sesion</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/registro" className="btn btn-dark" activeClassName="active">Registro</NavLink>
                                    </li>
                                </>
                            )}
                            {auth.isLogged() && (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/diagnostico" className="btn btn-dark" activeClassName="active">Diagnostico</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/add-evaluacion" className="btn btn-dark" activeClassName="active">Criterios de Evaluacion</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/puestotrabajo" className="btn btn-dark" activeClassName="active">Puesto de Trabajo</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/dashboard" className="btn btn-dark" activeClassName="active">Dashboard</NavLink>
                                    </li>

                                    <li className="nav-item ">
                                        <ButtonGroup className="btn btn-dark " onClick={auth.logout}>Logout</ButtonGroup>
                                    </li>

                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
