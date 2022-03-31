const user = require('../models/user');

class UserController {

    register(req, res) {
        let objUser = req.body;
        if (objUser.name && objUser.telephone && objUser.email && objUser.password) {
            //Guardar usuario en la base de datos
            user.create(objUser, (err, data) => {
                if (err) {
                    res.status(400).json({
                        message: 'Datos incompletos'
                    });
                } else {
                    res.status(201).json({
                        message: 'Usuario creado correctamente',
                        data: data
                    });
                }
            });
        }
    }
}

module.exports = UserController;