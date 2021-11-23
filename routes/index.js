var express = require('express');
var router = express.Router();
const archivosSistema = require('fs');
const uuid = require('uuid').v4;

const listaJson = archivosSistema.readFileSync('listaActividades.json', 'utf-8');
let listaActividades = JSON.parse(listaJson);
// const listaActividades = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  listaActividades});
});

router.get('/registro', (req,res,next) =>{
  res.render('registro');
});


router.post('/registro', (req,res,next) =>{
  // console.log(req.body.planchar);
  const {platos,cocinar,barrer,planchar} = req.body;
  if( !platos || !cocinar || !barrer || !planchar ){
    res.status(400).send('Debes escribir todos los campos');
    return;
  }
  let nuevaListaActividades = {
      id: uuid(),
      platos,
      cocinar,
      barrer,
      planchar
  }
  listaActividades.push(nuevaListaActividades);


  const listaJson = JSON.stringify(listaActividades);
  archivosSistema.writeFileSync('listaActividades.json', listaJson, 'utf-8');

  // res.send('recibido');
  res.render('index', { listaActividades} ); 
});



module.exports = router;
