'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Departments', [{
      name: 'General Support',
      username: 'general',
      password: 'general'
      RoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Billing Support',
      username: 'general',
      password: 'general'
      RoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Technical Support',
      username: 'general',
      password: 'general'
      RoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};