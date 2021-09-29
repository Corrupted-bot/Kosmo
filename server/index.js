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

app.get("/", (req, res) => {
    res.send('TESTING');
});


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


//Iniciando la api 
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
