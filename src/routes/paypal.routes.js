const express = require('express');

const router = express.Router();

const controller = require("../controllers/paypal.controller");

router.post("/pay", controller.pay);
router.get("/success", controller.success);
router.get('/cancel', controller.cancel);

module.exports = router;
