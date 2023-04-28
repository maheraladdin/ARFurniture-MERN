const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getProductById,
    getProductsBySearchString,
    getProductsByCategory
} = require("../controllers/productsController");

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get("/",getAllProducts);

// @route   GET api/products/:id
// @desc    Get product by id
// @access  Public
router.get("/:id",getProductById);

// @route   GET api/products/search/:searchString
// @desc    Get products by search string
// @access  Public
router.get("/search/:searchString",getProductsBySearchString);

// @route   GET api/products/category/:category
// @desc    Get products by category
// @access  Public
router.get("/category/:category",getProductsByCategory);


// export router
module.exports = router;