const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewRouter = require('./routes/review-router');
const app = express();
const db = require('./models/review-model');

app.use(express.static(path.join(__dirname, '../client', 'public')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/api/reviews/', function(req, res) {
//   db.query((err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.json(data);
//     }
//   })
// });

app.use('/api', reviewRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});