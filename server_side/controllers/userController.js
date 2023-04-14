const User = require("../models/userModel");

const asyncFunc = require("../middlewares/asyncFunc");

// sign up
module.exports.signUp = asyncFunc(async (req,res) => {
const user = new User(req.body);
    await user.save();
    res.status(201).send("user created");
});