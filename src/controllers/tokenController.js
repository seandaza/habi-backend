const jwt = require('jsonwebtoken');

class TokenController {

    constructor() {

    }

    verifyAuth = (req, res, next) => {
        const token = this.getToken(req);
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, data) => {
            if (error) {
                res.status(401).json({ info: 'Unauthorized access' });
            } else {
                next();
            }
        });
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
