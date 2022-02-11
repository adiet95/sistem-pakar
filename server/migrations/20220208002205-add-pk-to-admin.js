'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Admins', 'UserId', Sequelize.INTEGER)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Admins', 'UserId')
  }
};
