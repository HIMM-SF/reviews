/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');

mongoose
  .connect('mongodb://127.0.0.1:27017/reviews', { useNewUrlParser: true })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

const reviewsCollection = db.collection("reviews");

const reviews = [];

for (let i = 0; i < 100; i++) {
  const firstName = faker.name.firstName();
  const text = faker.lorem.paragraphs();
  const user_img = faker.image.avatar();
  const created_Month = faker.date.month();
  const communication = faker.random.number({ max: 5 });
  const accuracy = faker.random.number({ max: 5 });
  const location = faker.random.number({ max: 5 });
  const check_in = faker.random.number({ max: 5 });
  const value = faker.random.number({ max: 5 });
  const cleanliness = faker.random.number({ max: 5 });

  let newReview = {
    firstName,
    text,
    user_img,
    created_Month,
    communication,
    accuracy,
    location,
    check_in,
    value,
    cleanliness,
  };
  reviews.push(newReview);
}
reviewsCollection.insertMany(reviews);

module.exports = db;
