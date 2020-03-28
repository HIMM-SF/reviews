const mongoose = require('mongoose');
const Review = require('../models/review-model');
const faker = require('faker');

const reviews = [];
for (let i = 0; i < 5; i++) {
    reviews.push({
        firstName = faker.name.firstName(),
        text = faker.lorem.paragraphs(),
        userImg = faker.image.avatar(),
        createdMonth = faker.date.month(),
        communication = faker.random.number({ min: 3, max: 5 }),
        accuracy = faker.random.number({ min: 3, max: 5 }),
        location = faker.random.number({ min: 3, max: 5 }),
        heckIn = faker.random.number({ min: 3, max: 5 }),
        value = faker.random.number({ min: 3, max: 5 }),
        cleanliness = faker.random.number({ min: 3, max: 5 }),
        year = faker.random.number({ min: 2011, max: 2020 })
    }) 
}
Review.insertMany(reviews, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('successfully added to DB');
        mongoose.connection.close();
    }
})
