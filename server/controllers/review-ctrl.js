const Review = require('../models/review-model');

const getReviews = async (req, res) => {
  await Review.find({}, (err, reviews) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!reviews.length) {
      return res
        .status(404)
        .json({ success: false, error: 'Review not found' });
    }
    return res.status(200).json({ success: true, data: reviews });
  }).catch((err) => console.log(err));
};

module.exports = { getReviews };
