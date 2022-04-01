const jwt = require('jsonwebtoken');
const Realstate = require('../models/realstate');

class RealstateController{

    create(req, res){
        //Capturar datos del cuerpo de la peticion
        let {area, num_hab, price, address} = req.body;
        //Obtener el token del header
        let token = req.headers.authorization.split(' ')[1];
        
        //Decodificar el token
        let decode = jwt.decode(token, process.env.JWT_SECRET_KEY);

        //Crear objeto realstate
        
        Realstate.create({area,num_hab, price, address, user_id: decode.id}, (error, data) => {
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json({info: 'Realstate created'});
            }
        });
    }
}

module.exports = RealstateController;