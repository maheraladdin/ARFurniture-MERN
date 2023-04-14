const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getProductById,
    getProductsBySearchString,
    getProductsByCategory
} = require("../controllers/productsController");

// request all products
router.get("/",getAllProducts);

// request a product by id
// passing data from clint to server via url parameters
router.get("/:id",getProductById);

// request products by search string
router.get("/search/:searchString",getProductsBySearchString);

// request products by category
router.get("/category/:category",getProductsByCategory);


// export router
module.exports = router;