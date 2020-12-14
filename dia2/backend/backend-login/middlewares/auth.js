const tokenServices = require('../services/token');

module.exports = {
    verificarAdministrador = async(req, res, next)=>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No hay Token'
            });
        }else{
            const response = await tokenServices.decode(req.headers.token);
            if (response.rol === 'Adminstrador'){
                next();
            }else{
                return res.status(403).send({
                    message: 'No tiene permisos'
                });
            }
        }
    },

    verificarVendedor = async(req, res, next)=>{
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No hay Token'
            });
        }else{
            const response = await tokenServices.decode(req.headers.token);
            if (response.rol === 'Vendedor'){
                next();
            }else{
                return res.status(403).send({
                    message: 'No tiene permisos'
                });
            }
        }

    },
}