const express = require('express');

//Configurar variables de entorno
require ('dotenv').config();

// importar modulos
const ConnDb = require('./database/connDb');
const RealstateRouter = require('./routers/realstateRouter');
const UserRouter = require('./routers/userRouter');

class Server{
    constructor(){

        this.objConn = new ConnDb();
        // Crear aplicacion express
        this.app = express();
        this.config();
    }

    config(){
        // Indicar el procesamiento de datos en formato json durante las peticiones
        this.app.use(express.json());
        // Almacenar el puerto en el que se ejecutara el servidor
        this.app.set('PORT', process.env.PORT || 3000);

        //---------- crear rutas-------------------------
        const router = express.Router();
        // procesar solicitudes con el metodo GET a la raiz del servidor
        router.get('/', (req, res) => {
            res.status(200).send();
        });

        const userR = new UserRouter();
        const realstateR = new RealstateRouter();

        //----------- Anadir rutas a express---------------------
        this.app.use(router);
        this.app.use(userR.router);
        this.app.use(realstateR.router);

        // Poner el servidor a escuchar en el puerto indicado
        this.app.listen(this.app.get('PORT'), () => {
            console.log('Server on port', this.app.get('PORT'));
        });
    }
}

new Server();