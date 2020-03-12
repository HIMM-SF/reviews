/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const reviewRouter = require('./routes/review-router');

const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', reviewRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
