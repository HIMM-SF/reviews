const mongoose = require('mongoose');

const { Schema } = mongoose;

const Review = new Schema(
  {
    username: { type: String },
    text: { type: String },
    user_img: { type: String },
    created_Month: { type: String },
  },
  { communication: { type: Number } },
  { accuracy: { type: Number } },
  { location: { type: Number } },
  { check_in: { type: Number } },
  { value: { type: Number } },
  { cleanliness: { type: Number } },
  { year: { type: Number } },
);

module.exports = mongoose.model('reviews', Review);
