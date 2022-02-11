'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    
     await queryInterface.bulkInsert('Admins', [{
        username: 'admin',
        password: 'admin',
        nama: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Admins', null, {});
    
  }
};
