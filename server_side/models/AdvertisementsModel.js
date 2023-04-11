// 1) require mongoose

const mongoose = require("mongoose");

// 2) create a schema

const AdvertisementsSchema = new mongoose.Schema();

// 3) create a model

const Advertisements = mongoose.model("advertisements", AdvertisementsSchema);

// 4) export the model

module.exports = Advertisements;