const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Description = require('../database-mongodb/description.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/public'));

app.get('/:listingID', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'));
});

app.get('/gallery/:listingID', function(req, res) {
  Description.find({listingID: req.params.listingID}, function(err, data) {
    if (err) {
      res.send(500, 'Couldn\'t Get Photos');
    } else {
      res.json(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});