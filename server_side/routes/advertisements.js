const express = require("express");
const router = express.Router();
const getAllAdvertisements = require("../controllers/advertisementsController")

router.get('/',getAllAdvertisements);

// export router
module.exports = router;