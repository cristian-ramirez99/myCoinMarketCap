const { response } = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../models/user.model');

const uniqueUser = async (user) => {
  const equalUsers = await User.findAll({
    where: {
      [Op.or]: [{ username: user.username }, { email: user.email }],
    },
  });

  return equalUsers.length === 0;
};

const getAllUsers = async (req, res = response) => {
  const users = await User.findAll();

  res.json(
    {
      ok: true,
      users,
    },
  );
};

const getAdminUsers = async (req, res = response) => {
  const adminUsers = await User.findAll(({
    where: {
      role_id: 1,
    },
  }));

  res.json({
    ok: true,
    users: adminUsers,
  });
};

const createUser = async (req, res = response) => {
  try {
    const newUser = req.body;
    // const user = User(req.body);
    const unique = await uniqueUser(newUser);

    if (!unique) {
      res.json({
        ok: false,
        err: 'User already in use',
      });
    }

    newUser.created_on = new Date();
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    // TODO: Learn how to do this by model
    // user.save().then((userRes) => res.status(201).send({ userRes, ok: true }));

    res.json({
      user: newUser,
      ok: true,
    });
  } catch (err) {
    res.status(500).send({
      ok: false,
      err,
    });
  }
};

module.exports = {
  getAllUsers,
  getAdminUsers,
  createUser,
  uniqueUser,
};
