// 1) require mongoose

const mongoose = require("mongoose");

// 2) create a schema

const productsSchema = new mongoose.Schema();

// 3) create a model

const products = mongoose.model("products", productsSchema);

// 4) export the model

module.exports = products;