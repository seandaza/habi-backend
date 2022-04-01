const {Router} = require('express');
const UserController = require('../controllers/userController');

class UserRouter{
    constructor(){
        //Crear objeto de tipo Router y asignarlo como atributo de la clase
        this.router = Router();
        //Configurar las rutas
        this.#config();
        
    }

    #config(){
        const objuserC = new UserController();

        //crear y configurar endpoints o apis
        this.router.post('/user', objuserC.register);
        this.router.post('/user/login', objuserC.login);
    }
}

module.exports = UserRouter;