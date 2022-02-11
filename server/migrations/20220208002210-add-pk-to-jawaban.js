'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Soals', 'JawabanId', Sequelize.INTEGER)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Soals', 'JawabanId')
  }
};
