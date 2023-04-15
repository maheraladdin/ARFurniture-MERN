const validator = require("../util/signUpValidator")

module.exports = (req,res,next) => {
    const valid = validator(req.body);
    if(valid) {
        req.valid = 1;
        next();
    }
    else
        res.status(403).send("forbidden command");
}