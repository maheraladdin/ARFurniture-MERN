const express = require("express");
const router = express.Router();

// import controllers
const {
    signUp,
    login,
    updateUser,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    getCart,
    addToCart,
    removeFromCart} = require("../controllers/userController");

// import middlewares
const checkTokenMW = require("../middlewares/checkTokenMW");
const loginValidatorMW = require("../middlewares/loginValidatorMW");
const signUpValidatorMW = require("../middlewares/signUpValidatorMW");

// @route POST api/users/signup
// @desc Register user
// @access Public
router.post("/signup",signUpValidatorMW, signUp);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login",loginValidatorMW, login);

// @route PUT api/users/:id
// @desc Update user data
// @access Private
router.put("/:id",checkTokenMW, updateUser);

// @route GET api/users/wishlist/:id
// @desc Get wishlist by user id
// @access Private
router.get("/wishlist/:id",checkTokenMW, getWishlist);

// @route POST api/users/wishlist
// @desc Add to wishlist by user id
// @access Private
router.post("/wishlist",checkTokenMW, addToWishlist);

// @route DELETE api/users/wishlist
// @desc Remove from wishlist by user id
// @access Private
router.delete("/wishlist",checkTokenMW, removeFromWishlist);

// @route GET api/users/cart/:id
// @desc Get cart by user id
// @access Private
router.get("/cart/:id",checkTokenMW, getCart);

// @route POST api/users/cart
// @desc Add to cart by user id
// @access Private
router.post("/cart",checkTokenMW, addToCart);

// @route DELETE api/users/cart
// @desc Remove from cart by user id
// @access Private
router.delete("/cart",checkTokenMW, removeFromCart);





// export router
module.exports = router;