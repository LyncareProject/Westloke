const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

// db.cases = require("./cases.model");

module.exports = db;