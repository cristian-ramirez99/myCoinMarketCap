/*
    User
    route: '/user'
*/

const Router = require('express');
const { check } = require('express-validator');
const { getAllUsers, getAdminUsers, createUser } = require('../controllers/user');
const { checkField } = require('../middlewares/check-field');

const router = Router();

router.get('/admin', getAdminUsers);
router.get('/all', getAllUsers);
router.post('/', [
  check('username', 'username is required').not().isEmpty(),
  check('password', 'password is required').not().isEmpty(),
  check('email', 'email is required').isEmail(),
  check('role_id', 'role_id is required').not().isEmpty(),
  checkField,
], createUser);

module.exports = {
  router,
};
