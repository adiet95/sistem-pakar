'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hasil extends Model {
   
    static associate(models) {
      // define association here
    Hasil.belongsTo(models.Test, {foreignKey: 'TestId'})

    }
  };
  Hasil.init({
    hasilJawab: DataTypes.STRING,
    deskripsiJawab: DataTypes.STRING,
    TestId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hasil',
  });
  return Hasil;
};