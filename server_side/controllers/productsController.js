const products = require("../models/productsModel");

const asyncFunc = require("../middlewares/asyncFunc");

// get all products from DB
const getAllProducts = asyncFunc(async (req,res) => {
    const allProducts = await products.find();
    if(allProducts.length === 0)
        res.status(404).json({ message: "No products found" });
    else
        res.json(allProducts);
});

// get a product by id from DB
const getProductById = asyncFunc(async (req,res) => {
    const product = await products.findById(req.params.id);
    if (product == null)
        res.status(404).json({ message: "Cannot find product" });
    else
        res.json(product);
});

// get products by search string from DB
const getProductsBySearchString = asyncFunc(async (req,res) => {
    const searchString = req.params.searchString;
    const searchedProducts = await products.find({productName: {$regex: searchString,$options: "i"}});
    if(searchedProducts.length === 0)
        res.status(404).json({ message: "No products found" });
    else
        res.json(searchedProducts);
});

// get products by category from DB
const getProductsByCategory = asyncFunc(async (req,res) => {
    const category = req.params.category;
    const categorizedProducts = await products.find().where("category").equals(category);
    if(categorizedProducts.length === 0)
        res.status(404).json({ message: "No products found" });
    else
        res.json(categorizedProducts);
});

// export all functions
module.exports = {
    getAllProducts,
    getProductById,
    getProductsBySearchString,
    getProductsByCategory
}



