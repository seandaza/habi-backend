const jwt = require('jsonwebtoken');

class TokenController {

    constructor() {

    }

    getToken = (req) => {

        let token = null;
        let authorization = req.headers.authorization;

        if (authorization != null && authorization != undefined) {

            //Obtener el token del header
            let arrayAuth = authorization.split(" ");        
            token = arrayAuth[1];



        }
        return token;
    }
}

module.exports = TokenController;
