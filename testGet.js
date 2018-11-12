const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://taylor:gsWarrior22.@ds159273.mlab.com:59273/gallerys');

const descriptionSchema = new mongoose.Schema({
  photoID: Number,
  listingID: Number,
  imageURL: String,
  picCaption: String,
});

const Description = mongoose.model('gallerys', descriptionSchema);

// Description.findOne({listingID: 7}, function(err, data) {
//   console.log('this is data 3', data);
//   if (err) {
//     res.send(500, 'Couldn\'t Get Photos');
//   } else {

//   }
// });

let query = Description.find({listingID:7});
query.exec().then(res => console.log(res, 'response'));