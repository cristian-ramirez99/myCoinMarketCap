/*
    Diamond
    route: '/crypto/list'
*/

const Router = require('express');
const { getCryptoList, getCryptoTrending } = require('../controllers/crypto-list');

const router = Router();

router.get('/', getCryptoList);
router.get('/trending', getCryptoTrending);

module.exports = {
  router,
};
