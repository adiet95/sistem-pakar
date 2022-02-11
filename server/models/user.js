'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  const bcrypt = require("bcryptjs");
  class User extends Model {};
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nama: DataTypes.STRING
  }, {
  
    sequelize
  });
  User.associate = function(models) {
    // define association here
    User.hasMany(models.Soal)
    User.hasMany(models.Test)
  }
  User.beforeCreate((user, options) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
  });
  return User;
};