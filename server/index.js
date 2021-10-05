const express = require("express");
const mysql = require("mysql");


const db = mysql.createConnection({
  user: "grupo07",
  host: "icf233.c5d4mi2dthpc.us-east-1.rds.amazonaws.com",
  password: "grupo..07",
  database: "grupo07",
});

//Estatus de conexión
db.connect(function(err){
    if (err){
        console.error('error connecting: ' + err.stack);
    }
    else{
        console.log('MySQL Conectado!');
    }
});

// SETUP DEL SERVIDOR
const app = express();
app.use(express.json());

const cors=require("cors");
app.use(cors());


// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions))
//Puerto de el servidor
const PORT = process.env.PORT || 4000;

// app.get("/", (req, res) => {
//     res.send('hola');
// });

//LOGIN CORRECTO
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = ? AND password = ?",[username, password], 
        (err, result) => {
        if(err){
            res.send({ err: err });
        }
        if(result.length > 0){
            res.send(result);
        } else {
            res.send({message: "Contraseña o Usuario incorrecto."});
        }
      });
});
//REGISTRO CORRECTO
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users (username, password) VALUES (?, ?)",[username, password], 
        (err, result) => {
        console.log(err);
    });
});


app.post('/add-evaluacion', (req, res) => {
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;


    db.query("INSERT INTO criterios (titulo, descripcion) VALUES (?, ?)",[titulo, descripcion], 
        (err, result) => {
        console.log(err);
        if(err!=null){
            res.send({ err: err });
        }else{
            console.log(result);
            console.log("Se agrego un nuevo criterio de evaluacion");
            res.send({message:"Se guardo correctamente"});
        }

    });
});


app.post('/add-evaluacion-1',(req,res)=>{
    let datosArreglo = [];
    db.query("SELECT * FROM criterios",function (err, result, fields) {
        for (let value of result) {
            datosArreglo.push([value.titulo,value.descripcion]);
            value += 1;
        }
        res.send(result);
        // res.send(datosArreglo);
      });
    
});


// REGISTO EMPRESA
app.post('/diagnostico', (req, res) => {
    const username = req.body.username;
    const rut = req.body.rut;
    const giro = req.body.giro;
    const direccion = req.body.direccion;
    const mail = req.body.mail;
    const telefono = req.body.telefono;
    const cargo = req.body.cargo;
    const dotacion = req.body.dotacion;

    db.query("INSERT INTO empresas (NombreEmpresa, RutEmpresa, Giro, Direccion, MailEmpresa, TelefonoEmpresa, CargoEmpresa, DotacionEmpresa) VALUES (?, ?,?,?,?,?,?,?)",[username, rut,giro,direccion,mail,telefono,cargo,dotacion], 
        (err, result) => {
        console.log(err);
    });
});


// REGISTrO puesto
app.post('/puestotrabajo', (req, res) => {
    
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const horario = req.body.horario;
    const dethorario = req.body.dethorario;
    const vestuario = req.body.vestuario;
    const detvestuario = req.body.detvestuario;
    const formacion = req.body.formacion;
    const detformacion = req.body.detformacion;
    const pension = req.body.pension;
    const detpension = req.body.detpension;
    const relacion = req.body.relacion;
    const detrelacion = req.body.detrelacion;
    const seguro = req.body.seguro;
    const detseguro = req.body.detseguro;
    const vacaciones = req.body.vacaciones;
    const detvacaciones = req.body.detvacaciones;
    const evaluacionriesgo = req.body.evaluacionriesgo;
    const detriesgo = req.body.detriesgo;
    const evaluacionrealizada = req.body.evaluacionrealizada;
    const detevaluacion = req.body.detevaluacion;
    const promocion = req.body.promocion;
    const flexibilidad = req.body.flexibilidad;
    const pie = req.body.pie;
    const caminar = req.body.caminar;
    const sentado = req.body.sentado;
    const levantar = req.body.levantar;
    const acarrear = req.body.acarrear;
    const empujar = req.body.empujar;
    const subir = req.body.subir;
    const equilibrio = req.body.equilibrio;
    const encorvar = req.body.encorvar;
    const arrodillar = req.body.arrodillar;
    const manos = req.body.manos;
    const destreza = req.body.destreza;
    const vision = req.body.vision;
    const audicion = req.body.audicion;
    const adaptacion = req.body.adaptacion;
    const supervision = req.body.supervision;



    db.query("INSERT INTO puestotrabajos (nombrepuesto, descripcionpuesto, controlhorario, detallescontrolhorario, normasvestuario, detallesvestuario, formacioncasa, detallesformacion,pensionempresa,detallespension,relacionfamilia,detallesrelacion,seguroenfermedad,detallesseguro,vacaciones,detallesvacaciones,evaluacionderiesgo,detallesriesgo,evaluacionrealizada,detallesevaluacion,promocionlaboral,flexibilidad,estardepie,caminar,estarsentado,levantar,acarrear,empujar,subir,equilibrio,encorvarse,arrodillarse,manipularmanos,manipulardestreza,vision,audicion,adaptacion,supervision) VALUES (?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [nombre, descripcion, horario,dethorario,vestuario,detvestuario,formacion,detformacion,pension,detpension,relacion,detrelacion,seguro,detseguro,vacaciones,detvacaciones,
        evaluacionriesgo,detriesgo,evaluacionrealizada,detevaluacion,promocion,flexibilidad,pie,caminar,sentado,levantar,acarrear,empujar,subir,equilibrio,encorvar,arrodillar,
        manos,destreza,vision,audicion,adaptacion,supervision], 
        (err, result) => {
        console.log(err);
    });
});

app.post('/add-diagnostico-1',(req,res)=>{
    let datosArreglo = [];
    db.query("SELECT * FROM empresas",function (err, result, fields) {
        for (let value of result) {
            datosArreglo.push([value.NombreEmpresa,value.RutEmpresa]);
            value += 1;
        }
        console.log(datosArreglo)
        res.send(result);
        // res.send(datosArreglo);
      });
    
});


//Iniciando la api 
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
