'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Hasils', 'TestId', Sequelize.INTEGER)
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Hasils', 'TestId')

  }
};
