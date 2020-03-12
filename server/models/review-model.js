const mongoose = require('mongoose');

const { Schema } = mongoose;

const Review = new Schema(
  {
    username: { type: String, required: true },
    text: { type: String, required: true },
    user_img: { type: String, required: true },
    created_At: { type: Number, required: true },
  },
  { communication: { type: Number } },
  { accuracy: { type: Number } },
  { location: { type: Number } },
  { accuracy: { type: Number } },
  { check_in: { type: Number } },
  { value: { type: Number } },
  { cleanliness: { type: Number } },
  { timestamps: true },
);

module.exports = mongoose.model('reviews', Review);
