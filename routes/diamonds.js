/*
    Diamond
    route: '/diamonds'
*/

const Router = require('express');
const { check } = require('express-validator');
const { getDiamonds } = require('../controllers/diamonds');
const { checkField } = require('../middlewares/check-field');

const router = Router();

router.get(
  '/:user_id',
  [
    check('user_id', 'user_id must be a number').isNumeric(),
    checkField,
  ],
  getDiamonds,
);

module.exports = {
  router,
};
