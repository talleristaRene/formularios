var express = require('express');
var router = express.Router();
const archivosSistema = require('fs');
const uuid = require('uuid').v4;

// const listaJson = archivosSistema.readFileSync('listaActividades.json', 'utf-8');
// let listaActividades = JSON.parse(listaJson);
const listaActividades = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  listaActividades});
});

// router.get('/formularioGet', (req,res,next) =>{
//   const qs =  req.body;
//   console.log(qs);
//   res.render('index',{listaActividades});
  
// });

// router.post('/formularioPost', (req,res,next) =>{
//   const {platos,cocinar,barrer,planchar, genero} = req.body;
//   if( !platos || !cocinar || !barrer || !planchar  || !genero ){
//     res.status(400).send('Debes escribir todos los campos');
//     return;
//   }
//   let nuevaListaActividades = {
//       id: uuid(),
//       platos,
//       cocinar,
//       barrer,
//       planchar,
//       genero
//   }
//   listaActividades.push(nuevaListaActividades);

//   const listaJson = JSON.stringify(listaActividades);
//   archivosSistema.writeFileSync('listaActividades.json', listaJson, 'utf-8');

//   res.render('index', { listaActividades} ); 
// });

module.exports = router;
