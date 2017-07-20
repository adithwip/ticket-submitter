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
    return queryInterface.bulkInsert('Departements', [{
      name: 'General Support',
      username: 'general',
      password: '62eb55dbdeb217018b7c4b0f8fe814b21978501f2c6508002ec8b57596ba',
      RoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Billing Support',
      username: 'billing',
      password: '62eb55dbdeb217018b7c4b0f8fe814b21978501f2c6508002ec8b57596ba',
      RoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Technical Support',
      username: 'technical',
      password: '62eb55dbdeb217018b7c4b0f8fe814b21978501f2c6508002ec8b57596ba',
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
