/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema(
    {
        text: { type: String, required: true },
        user_img: { type: String, required: true },
        createdAt: { type: Number, required: true },
    },
    { communication: { type: Number}},
    { timestamps: true },
)

module.exports = mongoose.model('reviews', Review);