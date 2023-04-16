const express = require("express");
const router = express.Router();
const getAllAdvertisements = require("../controllers/advertisementsController")

// @route   GET api/advertisements
// @desc    Get all advertisements
// @access  Public
router.get('/',getAllAdvertisements);

// export router
module.exports = router;