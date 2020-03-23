const mongoose = require('mongoose');

const { Schema } = mongoose;

const Review = new Schema(
  {
    username: { type: String },
    text: { type: String },
    userImg: { type: String },
    createdMonth: { type: String },
  },
  { communication: { type: Number } },
  { accuracy: { type: Number } },
  { location: { type: Number } },
  { checkIn: { type: Number } },
  { value: { type: Number } },
  { cleanliness: { type: Number } },
  { year: { type: Number } },
);

module.exports = mongoose.model('reviews', Review);
