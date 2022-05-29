const { response } = require('express');
const { Diamond, DiamondClass } = require('../models/diamond.model');

const getDiamonds = async (req, res = response) => {
  try {
    const userId = req.param('user_id');
    let diamonds = await Diamond.findOne({
      where: {
        user_id: userId,
      },
    });

    // TODO: This should do it the constructor
    if (!diamonds) {
      diamonds = new DiamondClass(userId);
    }
    res.json({
      ok: true,
      diamonds,
    });
  } catch (error) {
    res.status(500).send({ ok: false, msg: 'Internal server Error' });
  }
};

module.exports = {
  getDiamonds,
};
