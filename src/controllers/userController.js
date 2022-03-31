const user = require('../models/user');
const jwt = require('jsonwebtoken');

class UserController {

    register(req, res) {
        let objUser = req.body;
        if (objUser.name && objUser.telephone && objUser.email && objUser.password) {
            //Guardar usuario en la base de datos
            user.create(objUser, (error, data) => {
                if (error) {
                    res.status(400).json({
                        info : error
                    });
                } else {
                    let token = jwt.sign({id: data._id}, process.env.JWT_SECRET_KEY);
                    res.status(201).json({
                        token: token
                    });
                }
            });
        } else {
            res.status(400).json({
                info : 'Faltan datos'
            });
        }
    }

    //-----------Decodificar el token---------------------

/*     decode(req, res) {
        let token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, (error, data) => {
            if (error) {
                res.status(400).json({
                    info : error
                });
            } else {
                res.status(200).json({
                    info : data
                });
            }
        });
    } */

    login(req, res) {
        let {email, password} = req.body;
        user.findOne({email, password}, (error, data) => {
            if (error) {
                res.status(500).json({error});
            } else {
                if (data!= null && data!= undefined) {
                    let token = jwt.sign({id: data._id}, process.env.JWT_SECRET_KEY);
                    res.status(200).json({
                        token: token
                    });
                } else {
                    res.status(401).json({
                        info : 'Usuario o contraseña incorrectos'
                    });
                }
            }
        });
    }
};

module.exports = UserController;