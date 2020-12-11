//se crearon metodos

const router = require('express').Router();
const { User } = require('../../models');
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');


//api/user/
router.get('/', async(req, res)=>{
    const user = await User.findAll();
    res.status(200).json(user);
});

//para login post para enviar datos. /api/user/login
// router.post('/login', async(req, res)=>{

// })

// crear usuario
// encripta contraseña
router.post('/register', async(req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.status(200).json(user);
});

//controlador: maneja la logica, lo de async().. iria en el controlador
router.post('/login', userController.login);
// router.post('/register', userController.register);


module.exports = router;