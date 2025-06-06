const jwt = require("jsonwebtoken");
const config =  require("config");

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send({message: "Access denied. Token is required"});

    try {
        const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send({message: "Invalid Token"});
    }
    
}