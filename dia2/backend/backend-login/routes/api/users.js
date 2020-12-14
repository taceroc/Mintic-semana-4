//se crearon metodos

const router = require('express').Router();
const models = require('../../models');
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');
const auth = require("../../middleware/auth");


//api/api/auth
router.get('/listar',auth.verificarVendedor, userController.listar);

// crear usuario
// encripta contraseña
router.post('/register', auth.verificarAdministrador, userController.register);

//controlador: maneja la logica, lo de async().. iria en el controlador
router.post('/signin', auth.verificarAdministrador, userController.signin);



module.exports = router;