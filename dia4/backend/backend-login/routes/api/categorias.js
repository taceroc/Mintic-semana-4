//se crearon metodos

const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaController.js');
const auth = require("../../middlewares/auth");


//api/api/auth
router.get('/list',auth.verificarVendedor, categoriaController.listar);

// crear usuario
// encripta contraseña
router.post('/add', auth.verificarVendedor, categoriaController.add);
router.put('/update', auth.verificarVendedor, categoriaController.update);
router.put('/activate', auth.verificarVendedor, categoriaController.activate);
router.put('/deactivate', auth.verificarVendedor, categoriaController.deactivate);
//controlador: maneja la logica, lo de async().. iria en el controlador



module.exports = router;