const router = require('express').Router();
const apiRouterUser = require('./api/users.js');
const apiRouterCategoria = require('./api/categorias.js');
const apiRouterArticulo = require('./api/articulos.js');


router.use('/usuario', apiRouterUser);
router.use('/categoria', apiRouterCategoria);
router.use('/articulo', apiRouterArticulo);


module.exports = router;