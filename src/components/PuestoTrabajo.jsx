import React, { useState } from 'react';
import Axios from "axios";
import Swal from 'sweetalert2';
import '../App.css';


const PuestoTrabajo = () => {
    const [nombrePuesto, setNombrePuesto] = useState("");

    const [Descripcionpuesto, setDescripcionPuesto] = useState("");

    const [ControlHorario, setControlHorario] = useState("");
    const [detallescontrolhor, setdetallescontrolhor] = useState("");

    const [NormasVestuario, setNormasVestuario] = useState("");
    const [detallesvestuario, setdetallesvestuario] = useState("");

    const [FormacionCasa, setFormacionCasa] = useState("");
    const [detallesFormacion, setdetallesFormacion] = useState("");

    const [PensionEmpresa, setPensionEmpresa] = useState("");
    const [detallePension, setdetallePension] = useState("");

    const [RelacionFamilia, setRelacionFamilia] = useState("");
    const [detallesRelacion, setdetallesRelacion] = useState("");

    const [SeguroEnfermedad, setSeguroEnfermedad] = useState("");
    const [detallesSeguro, setdetallesSeguro] = useState("");

    const [Vacaciones, setVacaciones] = useState("");
    const [detallesVacaciones, setdetallesVacaciones] = useState("");

    const [EvaluaciondeRiesgo, setEvaluaciondeRiesgo] = useState("");
    const [detallesRiesgo, setdetallesRiesgo] = useState("");

    const [EvaluacionRealizada, setEvaluacionRealizada] = useState("");
    const [detallesRealizada, setdetallesRealizada] = useState("");

    const [PromocionLaboral, setPromocionLaboral] = useState("");
    const [Flexibilidad, setFlexibilidad] = useState("");
    const [Estardepie, setEstardepie] = useState("");
    const [Caminar, setCaminar] = useState("");
    const [EstarSentado, setEstarSentado] = useState("");
    const [Levantar, setLevantar] = useState("");
    const [Acarrear, setAcarrear] = useState("");
    const [Empujar, setEmpujar] = useState("");
    const [Subir, setSubir] = useState("");
    const [Equilibrio, setEquilibrio] = useState("");
    const [Encorvarse, setEncorvarse] = useState("");
    const [Arrodillarse, setArrodillarse] = useState("");
    const [ManipularManos, setManipularManos] = useState("");
    const [ManipularDestreza, setManipularDestreza] = useState("");
    const [Vision, setVision] = useState("");
    const [Audicion, setAudicion] = useState("");
    const [Adaptacion, setAdaptacion] = useState("");
    const [Supervision, setSupervicion] = useState("");


    const eventoClick = () => {
        Swal.fire({
            title: 'Genial!',
            text: 'Se guardo correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }


    const registerr = () => {
        Axios.post('http://localhost:4000/puestotrabajo', {
            nombre: nombrePuesto,
            descripcion: Descripcionpuesto,
            horario: ControlHorario,
            dethorario: detallescontrolhor,
            vestuario: NormasVestuario,
            detvestuario: detallesvestuario,
            formacion: FormacionCasa,
            detformacion: detallesFormacion,
            pension: PensionEmpresa,
            detpension: detallePension,
            relacion: RelacionFamilia,
            detrelacion: detallesRelacion,
            seguro: SeguroEnfermedad,
            detseguro: detallesSeguro,
            vacaciones: Vacaciones,
            detvacaciones: detallesVacaciones,
            evaluacionriesgo: EvaluaciondeRiesgo,
            detriesgo: detallesRiesgo,
            evaluacionrealizada: EvaluacionRealizada,
            detevaluacion: detallesRealizada,
            promocion: PromocionLaboral,
            flexibilidad: Flexibilidad,
            pie: Estardepie,
            caminar: Caminar,
            sentado: EstarSentado,
            levantar: Levantar,
            acarrear: Acarrear,
            empujar: Empujar,
            subir: Subir,
            equilibrio: Equilibrio,
            encorvar: Encorvarse,
            arrodillar: Arrodillarse,
            manos: ManipularManos,
            destreza: ManipularDestreza,
            vision: Vision,
            audicion: Audicion,
            adaptacion: Adaptacion,
            supervision: Supervision,
        }).then((response) => {
            console.log(response)
            eventoClick();
        });
    }

    return (
        <>
            <div className="PuestoTrabajo formulario-2 formulario">
                <h1> Detalles Puesto de trabajo </h1>

                <input type="text" placeholder="Nombre del puesto"
                    onChange={(e) => {
                        setNombrePuesto(e.target.value);
                    }}

                />
                <br />

                <input type="text" placeholder="Descripcion Puesto disponible"
                    onChange={(e) => {
                        setDescripcionPuesto(e.target.value);
                    }}

                />
                <br />
                <label>Control Horario</label>
                <select className="form-select" aria-label="Control Horario" defaultValue={'DEFAULT'} onChange={(e) => { setControlHorario(e.target.value); }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>

                </select>

                <textarea type="text" placeholder="Detalles Control Horario" maxLength={500}
                    onChange={(e) => {
                        setdetallescontrolhor(e.target.value);
                    }}

                ></textarea>
                <br />
                <label> Normas de Vestuario </label>
                <select className="form-select" aria-label="Normas de Vestuario" defaultValue={'DEFAULT'} onChange={(e) => {
                    setNormasVestuario(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <textarea type="text" placeholder="Detalles de Normas de Vestuario" maxLength={500}
                    onChange={(e) => {
                        setdetallesvestuario(e.target.value);
                    }}

                />

                <br />
                <label> Formacion en Casa </label>
                <select className="form-select" aria-label="Formacion en Casa" defaultValue={'DEFAULT'} onChange={(e) => {
                    setFormacionCasa(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <textarea type="text" placeholder="Detalles Formacion en Casa" maxLength={500}
                    onChange={(e) => {
                        setdetallesFormacion(e.target.value);
                    }}

                />

                <br />
                <label> Pension de Empresa </label>
                <select className="form-select" aria-label="Pensión de empresa" defaultValue={'DEFAULT'} onChange={(e) => {
                    setPensionEmpresa(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <textarea type="text" placeholder="Detalles Pension de Empresa" maxLength={500}
                    onChange={(e) => {
                        setdetallePension(e.target.value);
                    }}

                />

                <br />
                <label>Relacion con la familia</label>
                <select className="form-select" aria-label="Relacion con la Familia" defaultValue={'DEFAULT'} onChange={(e) => {
                    setRelacionFamilia(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <textarea type="text" placeholder="Detalles Relacion Familia" maxLength={500}
                    onChange={(e) => {
                        setdetallesRelacion(e.target.value);
                    }}

                />

                <br />
                <label>Seguro de enfermedad </label>
                <select className="form-select" aria-label="Seguro de Enfermedad" defaultValue={'DEFAULT'} onChange={(e) => {
                    setSeguroEnfermedad(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>

                <textarea type="text" placeholder="Detalles Seguro de Enfermedad" maxLength={500}
                    onChange={(e) => {
                        setdetallesSeguro(e.target.value);
                    }}

                />

                <br />

                <label>Vacaciones </label>
                <select className="form-select" aria-label="Vacaciones" defaultValue={'DEFAULT'} onChange={(e) => {
                    setVacaciones(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>

                <textarea type="text" placeholder="Detalles Vacaciones" maxLength={500}
                    onChange={(e) => {
                        setdetallesVacaciones(e.target.value);
                    }}

                />
                <div> <label>SALUD Y SEGURIDAD</label></div>
                <label>Evaluacion de riesgo</label>
                <select className="form-select" aria-label="Evaluacion de riesgo" defaultValue={'DEFAULT'} onChange={(e) => {
                    setEvaluaciondeRiesgo(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>

                <textarea type="text" placeholder="Detalles Evaluacion de Riesgo" maxLength={500}
                    onChange={(e) => {
                        setdetallesRiesgo(e.target.value);
                    }}

                />
                <br />
                <label>Evaluacion Realizada</label>
                <select className="form-select" aria-label="Evaluacion Realizada" defaultValue={'DEFAULT'} onChange={(e) => {
                    setEvaluacionRealizada(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>

                <textarea type="text" placeholder="Detalles Evaluacion Realizada" maxLength={500}
                    onChange={(e) => {
                        setdetallesRealizada(e.target.value);
                    }}

                />
                <label>Promocion Laboral</label>
                <textarea type="text" placeholder="Perspectiva de promocion Laboral" maxLength={500}
                    onChange={(e) => {
                        setPromocionLaboral(e.target.value);
                    }}

                />
                <div>

                    <label>Flexibilidad Laboral</label>
                    <textarea type="text" placeholder="Flexibilidad Laboral" maxLength={500}
                        onChange={(e) => {
                            setFlexibilidad(e.target.value);
                        }}

                    />
                    <label>HABILIDAD FISICA</label>
                </div>

                <label>Estar de pie</label>
                <select className="form-select" aria-label="Estar de pie" defaultValue={'DEFAULT'} onChange={(e) => {
                    setEstardepie(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Caminar</label>
                <select className="form-select" aria-label="Caminar" defaultValue={'DEFAULT'} onChange={(e) => {
                    setCaminar(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Estar Sentado</label>
                <select className="form-select" aria-label="Estar Sentado" defaultValue={'DEFAULT'} onChange={(e) => {
                    setEstarSentado(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Levantar</label>
                <select className="form-select" aria-label="Levantar" defaultValue={'DEFAULT'} onChange={(e) => {
                    setLevantar(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Acarrear</label>
                <select className="form-select" aria-label="Acarrear" defaultValue={'DEFAULT'} onChange={(e) => {
                    setAcarrear(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Empujar</label>
                <select className="form-select" aria-label="Empujar" defaultValue={'DEFAULT'} onChange={(e) => {
                    setEmpujar(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Subir</label>
                <select className="form-select" aria-label="Subir" defaultValue={'DEFAULT'} onChange={(e) => {
                    setSubir(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Mantener Equilibrio</label>
                <select className="form-select" aria-label="Mantener Equilibrio" defaultValue={'DEFAULT'} onChange={(e) => {
                    setEquilibrio(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Encorvarse</label>
                <select className="form-select" aria-label="Encorvarse" defaultValue={'DEFAULT'} onChange={(e) => {
                    setEncorvarse(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Arrodillarse</label>
                <select className="form-select" aria-label="Arrodillarse" defaultValue={'DEFAULT'} onChange={(e) => {
                    setArrodillarse(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Manipular con las manos</label>
                <select className="form-select" aria-label="Manipular con las manos" defaultValue={'DEFAULT'} onChange={(e) => {
                    setManipularManos(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">UNA MANO</option>
                    <option value="2">AMBAS MANOS</option>
                </select>
                <label>Manipular con destreza</label>
                <select className="form-select" aria-label="Manipular con destreza" defaultValue={'DEFAULT'} onChange={(e) => {
                    setManipularDestreza(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">FINA</option>
                    <option value="2">GRUESA</option>
                </select>
                <label>Vision</label>
                <select className="form-select" aria-label="Vision" defaultValue={'DEFAULT'} onChange={(e) => {
                    setVision(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Audicion</label>
                <select className="form-select" aria-label="Audicion" defaultValue={'DEFAULT'} onChange={(e) => {
                    setAudicion(e.target.value);
                }}>
                    <option value="DEFAULT" disabled>Seleccione una opción</option>
                    <option value="1">SI</option>
                    <option value="2">NO</option>
                </select>
                <label>Requisitos de adaptacion</label>
                <textarea type="text" placeholder="Requisitos de adaptacion" maxLength={500}
                    onChange={(e) => {
                        setAdaptacion(e.target.value);
                    }}

                />
                <label>Expetativas de supervicion/ apoyo natural</label>
                <textarea type="text" placeholder="Expetativas de supervicion/apoyo natural" maxLength={500}
                    onChange={(e) => {
                        setSupervicion(e.target.value);
                    }}

                />
                <button className="custom-btn btn-11" onClick={registerr}> Agregar </button>
            </div>


        </>
    );
}

export default PuestoTrabajo;