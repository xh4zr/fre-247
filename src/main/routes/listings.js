const express = require('express');
const router = express.Router();

const dbListings = require('../../../database/listings')

router.get('/', function(req, res, next) {
  const listings = dbListings.index;

  res.render('listings', { listings });
});

module.exports = router;
