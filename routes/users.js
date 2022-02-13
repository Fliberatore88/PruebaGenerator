var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/usersControllers')

/* GET users listing. */
router.get('/', userControllers.darNombre)

router.get('/:id?', userControllers.nombreEspecifico)
 
module.exports = router;