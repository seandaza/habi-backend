const jwt = require('jsonwebtoken');
const Realstate = require('../models/realstate');
const TokenController = require('./tokenController');

class RealstateController {

    constructor() {
        this.tokenC = new TokenController();
    }

    create = (req, res) => {
        //Capturar datos del cuerpo de la peticion
        let { area, num_hab, price, address } = req.body;

        //Obtener el token del header
        let token = this.tokenC.getToken(req);

        //Decodificar el token
        let decode = jwt.decode(token, process.env.JWT_SECRET_KEY);

        //Crear objeto realstate

        Realstate.create({ area, num_hab, price, address, user_id: decode.id }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ info: 'Realstate created' });
            }
        });
    }

    update = (req, res) => {
        //Capturar el id del Inmueble
        let { id, area, num_hab, price, address } = req.body;

        //Obtener el token del header
        let token = this.tokenC.getToken(req);

        //Decodificar el token
        let decode = jwt.decode(token, process.env.JWT_SECRET_KEY);

        let user_id = decode.id;

        //buscar por id del inmueble y id del usuario para actualizarlo
        Realstate.findOneAndUpdate({ _id: id, user_id }, { area, num_hab, price, address }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ info: 'Realstate updated' });
            }
        });
    }
}

module.exports = RealstateController;