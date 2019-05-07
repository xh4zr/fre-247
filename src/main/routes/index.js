const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { message: 'Hello' });
});

module.exports = router;
