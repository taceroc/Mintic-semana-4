const jwt = require('jsonwebtoken');
const models = require("../models");

const checkToken = (token) =>{
    let localID = null;
    try {
        const {id} = token.decode(token);
        localID = id;
    } catch (error) {
        
    }
    const user = await models.user.findOne({where: {
        id:id,
        status: 1
    }});
    if(user){
        const token = encode(user);
        return{
            token, 
            rol: user.rol
        }
    }else{
        return false
    }
}

module.exposts = {
    encode: async(user)=>{
        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            rol: user.rol,
            status: user.estado,
        }, 'supersecreta123410',{
            expiresIn: 86400, //en segundos
        });
        return token;
    },
    decode: async(req, res)=>{
        try {
            const {id} = await jwt.verify(token, 'supersecreta123410');
            const user = await models.user.findOne({where: {
                id:id,
                status: 1
            }});
            if(user){
                return user;
            }else{
                return false;
            }
        } catch (error) {
            const newToken = await checkToken(token);
            return newToken;
        }
    },
}