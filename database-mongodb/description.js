const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const descriptionSchema = new mongoose.Schema({
  photoID: Number,
  listingID: Number,
  imageURL: String,
  picCaption: String,
});

const Description = mongoose.model('Description', descriptionSchema);
module.exports = Description;