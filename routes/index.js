var express = require('express');
var router = express.Router();
const archivosSistema = require('fs');
// Para genear id a cada entrada de actividad
const uuid = require('uuid').v4;

const listaJson = archivosSistema.readFileSync('listaActividades.json', 'utf-8');
let listaActividades = JSON.parse(listaJson);

router.get('/formGet', (req,res) =>{
  res.render('formGet');
});

router.get('/formPost', (req,res) =>{
  res.render('formPost');
});


// Se maneja la informacion del formulario
router.get('/', function(req, res) {
  const {platos,cocinar,barrer,planchar, genero} = req.query;
  let nuevaListaActividades = {id: uuid(), platos, cocinar, barrer, planchar, genero }
  listarActividades(nuevaListaActividades);
  res.render('index', { listaActividades} ); 
});

router.post('/',(req,res)=>{
  const {platos,cocinar,barrer,planchar, genero} = req.body;
  let nuevaListaActividades = {id: uuid(),platos,cocinar,barrer,planchar,genero}
  listarActividades(nuevaListaActividades);
  res.render('index', { listaActividades} ); 
});

function listarActividades(lista) {
  listaActividades.push(lista);
  const listaJson = JSON.stringify(listaActividades);
  archivosSistema.writeFileSync('listaActividades.json', listaJson, 'utf-8');
}

module.exports = router;
