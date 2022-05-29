const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URI);

const User = sequelize.define(
  'user',
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_on: {
      type: DataTypes.DATE,
      timestamps: true,
    },
    role_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_login: {
      type: DataTypes.DATE,
      timestamps: true,
    },
  },
  {
    timestamps: false,
  },
  // Other type of model
  {
    last_login: {
      type: DataTypes.DATE,
      timestamps: true,
    },
  },
);

module.exports = {
  User,
};
