'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    
    static associate(models) {
      // define association here
      Test.hasMany(models.Hasil)
      Test.belongsTo(models.User, {foreignKey: 'UserId'})

    }c
  };
  Test.init({
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    jawaban1: DataTypes.STRING,
    jawaban2: DataTypes.STRING,
    jawaban3: DataTypes.STRING,
    jawaban4: DataTypes.STRING,
    jawaban5: DataTypes.STRING,
    jawaban6: DataTypes.STRING,
    jawaban7: DataTypes.STRING,
    jawaban8: DataTypes.STRING,
    jawaban9: DataTypes.STRING,
    jawaban10: DataTypes.STRING,
    hasil: DataTypes.STRING,
    audio: DataTypes.STRING,
    kinestetic: DataTypes.STRING,
    visual: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (data, option) => {
        let jawabanA = 0
        let jawabanV = 0
        let jawabanK = 0

        const jawaban = [data.jawaban1, data.jawaban2, data.jawaban3, data.jawaban4, data.jawaban5, data.jawaban6, data.jawaban7, data.jawaban8, data.jawaban9, data.jawaban10, ]
        jawaban.forEach(e=>{
          if(e == 'audiotory'){
            jawabanA ++
          } else if(e == 'visual'){
            jawabanV ++
          } else if(e == 'kinestetic'){
            jawabanK ++
          }
        })
        data.audio = jawabanA
        data.visual = jawabanV
        data.kinestetic = jawabanK

        // let temp = [['Audio', jawabanA], ['Visual', jawabanV], ['Kinestetic', jawabanK]]
        let temp = [jawabanA, jawabanV, jawabanK]
        // let final = temp[1].sort()
        for(let i=0; i<temp.length; i++){
          for(let j=i+1; j<temp.length; j++)
          if(temp[i] < temp[j]){
              let sorting = temp[i]
              temp[i] = temp[j]
              temp[j] = sorting
          }
      }
        let final = temp[0]
        if(final == jawabanA){
          data.hasil = 'Audiotory'
        } else if(final == jawabanV){
          data.hasil = 'Visual'
        } else if(final == jawabanK){
          data.hasil = 'Kinestetic'
        }
      }
    },
    sequelize,
    modelName: 'Test',
  });
  return Test;
};