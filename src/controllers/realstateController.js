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
    //Metodo para actualizar un realstate por id asociado al usuario
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
    //Metodo para obtener los inmuebles por id del usuario
    getByUser = (req, res) => {
        //Obtener el token del header
        let token = this.tokenC.getToken(req);

        //Decodificar el token
        let decode = jwt.decode(token, process.env.JWT_SECRET_KEY);

        let user_id = decode.id;

        //buscar por id del usuario
        Realstate.find({ user_id }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ info: data });
            }
        });
    }



    //metodo para eliminar un realstate por id asociado al usuario
    delete = (req, res) => {
        //Capturar el id del Inmueble
        let { id } = req.body;

        //Obtener el token del header
        let token = this.tokenC.getToken(req);

        //Decodificar el token
        let decode = jwt.decode(token, process.env.JWT_SECRET_KEY);

        let user_id = decode.id;

        //buscar por id del inmueble y id del usuario para eliminarlo de la base de datos
        Realstate.findOneAndRemove({ _id: id, user_id }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ info: 'Realstate deleted' });
            }
        });
    }
}

module.exports = RealstateController;