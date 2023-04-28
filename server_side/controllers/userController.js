const User = require("../models/userModel");
const asyncFunc = require("../middlewares/asyncFunc");
const bcrypt = require("bcrypt");

// sign up
module.exports.signUp = asyncFunc(async (req,res) => {

    console.log(req.body)
    // check if the user is already registered
    const isRegistered = await User.findOne({email: req.body.email}).exec();
    if (isRegistered)
        return res.status(400).send({message: "user already registered" , isRegistered: true});

    // if not registered then register the user
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        image: "",
        wishlist: [],
        cart: [],
    });

    // save user

    await user.save();

    // get user data

    const userData = await User.find({email: req.body.email});
    userData.password = undefined;

    // if valid then generate token
    const token = user.generateAuthToken();

    // send token in response header
    res.header("x-auth-token", token);

    // send response
    res.status(200).send({
        message: "user registered successfully",
        isRegistered: false,
        isLogin: true,
        token,
        userData
    });
});

// login
module.exports.login = asyncFunc(async (req, res) => {

    // check email
    const user = await User.findOne({email: req.body.email}).exec();
    if(!user) return res.status(400).send({message: "Invalid email or password", isLogin: false});

    // check password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send({message: "Invalid email or password", isLogin: false});

    // if valid then generate token
    const token = user.generateAuthToken();

    // get user data
    const userData = await User.find({email: req.body.email});
    userData.password = undefined;

    // send response
    console.log("login successful");
    console.log("userData: ",userData);
    res.header("x-auth-token", token).status(200).send({
        message: "login successful",
        isLogin: true,
        token,
        userData
    });
});

// update user data
module.exports.updateUser = asyncFunc(async (req,res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (user == null)
        res.status(404).json({ message: "Cannot find student" });
    else
        res.json(user);
});

// get wishlist by user id
module.exports.getWishlist = asyncFunc(async (req,res) => {
    const user = await User.findById(req.params.id).select("wishlist");
    res.status(200).json({wishlist: user.wishlist});
});

// add to wishlist by user id
module.exports.addToWishlist = asyncFunc(async (req,res) => {
    const user = await User.findById(req.body.id);
    user.wishlist.push(req.body.productId);
    await user.save();
    res.status(200).json({wishlist: user.wishlist});
});

// remove from wishlist by user id
module.exports.removeFromWishlist = asyncFunc(async (req,res) => {
    const user = await User.findById(req.body.id);
    user.wishlist = user.wishlist.filter((id) => id !== req.body.productId);
    await user.save();
    res.status(200).json({wishlist: user.wishlist});
});

// get cart by user id
module.exports.getCart = asyncFunc(async (req,res) => {
    const user = await User.findById(req.params.id).select("cart");
    res.status(200).json({cart: user.cart});
});

// add to cart by user id
module.exports.addToCart = asyncFunc(async (req,res) => {
    const user = await User.findById(req.body.id);
    user.cart.push(req.body.productId);
    await user.save();
    res.status(200).json({cart: user.cart});
});

// remove from cart by user id
module.exports.removeFromCart = asyncFunc(async (req,res) => {
    const user = await User.findById(req.body.id);
    user.cart = user.cart.filter((id) => id !== req.body.productId);
    await user.save();
    res.status(200).json({cart: user.cart});
});