const Advertisements = require("../models/advertisementsModel");

const asyncFunc = require("../middlewares/asyncFunc");

module.exports = asyncFunc(async (req,res) => {
    console.log("getAllAdvertisements");
    res.json(await Advertisements.find());
})

