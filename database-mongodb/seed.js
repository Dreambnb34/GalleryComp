const db = require('./index.js');
const Description = require('./description.js');
const faker = require('faker');
const aws = require('aws-sdk');

aws.config.update({
  region: 'us-west-2'});


let s3 = new aws.S3();

let data = {
  Bucket: 'dreambnb-taylor'
};


s3.listObjects(data, (err, info) => {
  if (err) {
    console.log('Error', err);
  } else {
    let baseURL = 'https://dreambnb-taylor.s3.amazonaws.com/';
    for (var i = 1; i < 923; i++) {
      let sampleData = {};
      sampleData.photoID = i;
      sampleData.listingID = Math.floor(Math.random() * 100) + 1;
      sampleData.imageURL = baseURL + info.Contents[i].Key;
      sampleData.picCaption = faker.lorem.sentence();

      Description.create(sampleData, (err, result) => {
        if (err) {
          console.log('Error Seeding DB');
        }
      });
    }
  }
});





