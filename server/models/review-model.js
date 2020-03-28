const mongoose = require('../db/db');

const Review = mongoose.model('Reviews', new mongoose.Schema({
  username: String,
  text: String,
  userImg: String,
  createdMonth: String,
  communication: Number,
  accuracy: Number,
  location: Number,
  checkIn: Number,
  value: Number,
  cleanliness: Number,
  year: Number,
}));

const query = (callback) => {
  Review.find({}, function(err, repos) {
      if (err) {
          console.log(err)
      } else {
          callback(null, repos)
      }
  })
}

module.exports = Review;
module.exports.query = query;
