const express = require('express');
const ReviewCtrl = require('../controllers/review-ctrl');

const router = express.Router();

router.get('/reviews', ReviewCtrl.getReviews);

module.exports = router;
