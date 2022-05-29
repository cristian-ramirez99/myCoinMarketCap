const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URI);

const Diamond = sequelize.define(
  'diamond',
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    last_redeem: {
      type: DataTypes.DATE,
      allowNull: false,
      timestamps: true,
    },
  },
  {
    timestamps: false,
  },
);

class DiamondClass {
  constructor(user_id, amount = 0, last_redeem = new Date()) {
    this.user_id = user_id;
    this.amount = amount;
    this.last_redeem = last_redeem;
  }
}

module.exports = {
  Diamond,
  DiamondClass,
};
