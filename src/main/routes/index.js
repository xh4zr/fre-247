const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Florida Real Estate 24/7' });
});

router.get('/city/:city', function(req, res, next) {
  const city = req.params.city;
  res.render('city', { city });
});

module.exports = router;
