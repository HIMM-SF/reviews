/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');

mongoose
  .connect('mongodb://127.0.0.1:27017/reviews', { useNewUrlParser: true })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

const reviewsCollection = db.collection('reviews');

const reviews = [];

for (let i = 0; i < 100; i++) {
  const firstName = faker.name.firstName();
  const text = faker.lorem.paragraphs();
  const userImg = faker.image.avatar();
  const createdMonth = faker.date.month();
  const communication = faker.random.number({ min: 3, max: 5 });
  const accuracy = faker.random.number({ min: 3, max: 5 });
  const location = faker.random.number({ min: 3, max: 5 });
  const checkIn = faker.random.number({ min: 3, max: 5 });
  const value = faker.random.number({ min: 3, max: 5 });
  const cleanliness = faker.random.number({ min: 3, max: 5 });
  const year = faker.random.number({ min: 2011, max: 2020 });

  const newReview = {
    firstName,
    text,
    userImg,
    createdMonth,
    communication,
    accuracy,
    location,
    checkIn,
    value,
    cleanliness,
    year,
  };
  reviews.push(newReview);
}
reviewsCollection.insertMany(reviews);

module.exports = db;
