const Advertisements = require("../models/advertisementsModel");

const asyncFunc = require("../middlewares/asyncFunc");

module.exports = asyncFunc(async (req,res) => {
    res.json(await Advertisements.find());
})

