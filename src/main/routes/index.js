const express = require('express');
const router = express.Router();
const cityDb = require('../../../database/city');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Florida Real Estate 24/7' });
});

router.get('/city/:city', function(req, res, next) {
  let requestCity = req.params.city;
  const city = cityDb.get(requestCity);

  const communitiesByLetter = {
    'A': city.communityFilter('A'),
    'B': city.communityFilter('B'),
    'C': city.communityFilter('C'),
    'D-G': city.communityFilter(['D', 'E', 'F', 'G']),
    'H': city.communityFilter('H'),
    'I': city.communityFilter('I'),
    'J-K': city.communityFilter(['J', 'K']),
    'L-M': city.communityFilter(['L', 'M']),
    'N-O': city.communityFilter(['N', 'O']),
    'P': city.communityFilter('P'),
    'R': city.communityFilter('R'),
    'S': city.communityFilter('S'),
    'T': city.communityFilter('T'),
    'V-Z': city.communityFilter(['V', 'W', 'X', 'Y', 'Z'])
  };

  const realEstate = city.priceLinks('real-estate');
  const homes = city.priceLinks('homes');
  const condos = city.priceLinks('condos');

  res.render('city', { ...city, communitiesByLetter, communityKeys: Object.keys(communitiesByLetter), realEstate, homes, condos });
});

module.exports = router;
