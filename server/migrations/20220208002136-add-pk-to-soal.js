'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Soals', 'UserId', Sequelize.INTEGER)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Soals', 'UserId')
  }
};
