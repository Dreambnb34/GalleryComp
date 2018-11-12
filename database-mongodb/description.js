const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI);

const descriptionSchema = new mongoose.Schema({
  photoID: Number,
  listingID: Number,
  imageURL: String,
  picCaption: String,
});

const Description = mongoose.model('gallerys', descriptionSchema);
module.exports = Description;