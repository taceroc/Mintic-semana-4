//se crearon metodos

const router = require('express').Router();
const articuloController = require('../../controllers/ArticuloController.js');
const auth = require("../../middlewares/auth");


//api/api/auth
router.get('/list',auth.verificarVendedor, articuloController.listar);

// crear usuario
// encripta contraseña
router.post('/add', auth.verificarVendedor, articuloController.add);
router.put('/update', auth.verificarVendedor, articuloController.update);
router.put('/activate', auth.verificarVendedor, articuloController.activate);
router.put('/deactivate', auth.verificarVendedor, articuloController.deactivate);
//controlador: maneja la logica, lo de async().. iria en el controlador



module.exports = router;