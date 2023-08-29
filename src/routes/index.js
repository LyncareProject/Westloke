const express = require('express');

const router = express.Router();

const paypalRouter = require('./paypal.routes');
const emailRouter = require('./email.routes');

router.use('/paypal', paypalRouter);
router.use('/email', emailRouter);

module.exports = router;