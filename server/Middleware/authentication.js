const jwt = require("jsonwebtoken");
const authentication = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, 'secret_key', function (err, decoded) {
            if (err) {
                res.status(400).send({ msg: "You are not authorised." })
            }
            req.body.email = decoded;
            next();
        });
    }
    catch (e) {
        console.log("Error", e)
    }
}

module.exports = { authentication }