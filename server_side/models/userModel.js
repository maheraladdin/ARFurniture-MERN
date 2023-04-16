// require mongoose
const mongoose = require("mongoose");

// require jsonwebtoken
const jwt = require("jsonwebtoken");

// create a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    wishlist: Array,
    cart: Array,
});

// generate a token
userSchema.method("generateAuthToken",function () {
    // if valid then generate token
    if(!process.env.JWT_SECRET) return "JWT_SECRET is not defined";
    return jwt.sign({
        userId: this._id,
    }, process.env.JWT_SECRET);

})


// create a model
const User = mongoose.model("users", userSchema);

// export the model
module.exports = User;