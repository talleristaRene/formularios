var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Formularios' });
});

router.get('/registro', (req,res,next) =>{
  res.render('registro');
});


router.post('/registro', (req,res,next) =>{
  res.render('registro', req.body)
});



module.exports = router;
