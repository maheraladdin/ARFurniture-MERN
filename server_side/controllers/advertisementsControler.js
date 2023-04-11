const Advertisements = require("../models/AdvertisementsModel");

const asyncFunc = require("../middlewares/asyncFunc");

module.exports = asyncFunc(async (req,res) => {
    res.json(await Advertisements.find());
})

