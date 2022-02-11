'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tests', 'UserId', Sequelize.INTEGER)

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tests', 'UserId')

  }
};
