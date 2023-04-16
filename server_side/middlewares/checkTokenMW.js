const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = async function (req, res, next) {

    // get token from header
    const token = req.header("x-auth-token");

    // check if token is not present
    if (!token) return res.status(401).json({message: "Access denied. No token provided"});

    // verify token
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // check user id
        const user = await User.findById(payload.userId);
        if (user) return next();
        else return res.status(401).json({message: "Access denied. You are not logged in"});

    }
    catch (e) {
        return res.status(400).send("Invalid token");
    }
}