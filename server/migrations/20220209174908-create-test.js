'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      kelas: {
        type: Sequelize.STRING
      },
      jawaban1: {
        type: Sequelize.STRING
      },
      jawaban2: {
        type: Sequelize.STRING
      },
      jawaban3: {
        type: Sequelize.STRING
      },
      jawaban4: {
        type: Sequelize.STRING
      },
      jawaban5: {
        type: Sequelize.STRING
      },
      jawaban6: {
        type: Sequelize.STRING
      },
      jawaban7: {
        type: Sequelize.STRING
      },
      jawaban8: {
        type: Sequelize.STRING
      },
      jawaban9: {
        type: Sequelize.STRING
      },
      jawaban10: {
        type: Sequelize.STRING
      },
      hasil: {
        type: Sequelize.STRING
      },
      visual: {
        type: Sequelize.STRING
      },
      audio: {
        type: Sequelize.STRING
      },
      kinestetic: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tests');
  }
};