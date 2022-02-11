'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jawaban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jawaban.hasMany(models.Soal)

    }
  };
  Jawaban.init({
    codeJawab: DataTypes.STRING,
    nameJawab: DataTypes.STRING,
    deskripsiJawab: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jawaban',
  });
  return Jawaban;
};