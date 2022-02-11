'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Soals', 'AdminId', Sequelize.INTEGER)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Soals', 'AdminId')

  }
};
