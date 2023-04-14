// require mongoose
const mongoose = require("mongoose");

// require jsonwebtoken
const jwt = require("jsonwebtoken");

// create a schema
const userSchema = new mongoose.Schema();

// generate a token
userSchema.method("generateAuthToken",function () {
    // if valid then generate token
    if(process.env.JWT_SECRET) return "JWT_SECRET is not defined";
    return jwt.sign({
        userId: this._id,
    }, process.env.JWT_SECRET);

})


// create a model
const User = mongoose.model("user", userSchema);

// export the model
module.exports = User;