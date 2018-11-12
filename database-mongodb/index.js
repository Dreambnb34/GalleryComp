const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGOLAB_URI);

module.exports = db;