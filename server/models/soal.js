'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Soal extends Model {}
    Soal.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    namadeskripsi: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    AdminId: DataTypes.INTEGER,
    JawabanId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Soal',
  });
  Soal.associate = function(models) {
    // define association here
    Soal.belongsTo(models.Admin, {foreignKey: 'AdminId'})
    Soal.belongsTo(models.User, {foreignKey: 'UserId'})
    Soal.belongsTo(models.Jawaban, {foreignKey: 'JawabanId'})
  }
  return Soal;
};