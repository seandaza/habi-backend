const {Router} = require('express');
const RealstateController = require('../controllers/realstateController');
const TokenController = require('../controllers/tokenController');

class RealstateRouter{

    constructor(){
        this.router = Router();
        this.#config();
    }

    // #---> Crear metodo privado
    #config(){
        let tokenC = new TokenController();

        //Middleware para validar el token
        this.router.use(tokenC.verifyAuth);

        //Construir objeto
        const realstateC = new RealstateController();

        //----------Configurar rutas-------------------------

        // ruta publica
        this.router.get('/realstate', realstateC.get);

        //rutas privadas
        this.router.post('/realstate', realstateC.create);
        this.router.put('/realstate', realstateC.update);
        this.router.get('/realstate/user', realstateC.getByUser);
        this.router.delete('/realstate', realstateC.delete);
    }
}


module.exports = RealstateRouter;