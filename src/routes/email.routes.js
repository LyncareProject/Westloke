const express = require('express');

const router = express.Router();

const controller = require("../controllers/email.controller");

router.post("/", controller.postEmail);
router.post("/contact", controller.postContactEmail);

module.exports = router;