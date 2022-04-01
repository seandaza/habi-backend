const {Router} = require('express');
const RealstateController = require('../controllers/realstateController');

class RealstateRouter{

    constructor(){
        this.router = Router();
        this.#config();
    }

    // #---> Crear metodo privado
    #config(){
        //Construir objeto
        const realstateC = new RealstateController();

        //Configurar rutas
        this.router.post('/realstate', realstateC.create);
        this.router.put('/realstate', realstateC.update);
        this.router.get('/realstate', realstateC.getByUser);
        this.router.delete('/realstate', realstateC.delete);
    }
}


module.exports = RealstateRouter;