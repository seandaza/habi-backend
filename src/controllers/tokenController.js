const jwt = require('jsonwebtoken');

class TokenController {

    constructor() {

    }

    getToken = (req) => {

        let token = null;
        let authorization = req.headers.authorization;

        if (authorization != null && authorization != undefined) {

            //Obtener el token del header
            let token = authorization.split(' ')[1];


        }
        return token;
    }
}

module.exports = TokenController;
