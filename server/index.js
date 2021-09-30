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


//Iniciando la api 
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
