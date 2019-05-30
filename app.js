//Importar la librería
const express = require('express');
const process = require('process'); //preinstalada

//Puerto
const puerto = process.argv[2];

//Crear la variable de la api
const app = express(); //ésto es expressJS

//rutas
app.get('/',function(req,res){
  res.send('Maldito AWS');
});

















//escuchar en un puerto
console.log(`escuchando en el puerto ${puerto}`.green);
app.listen(puerto);
