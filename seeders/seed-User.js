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
    return queryInterface.bulkInsert('Users', [{
        username: 'achim',
        password: "62eb55dbdeb217018b7c4b0f8fe814b21978501f2c6508002ec8b57596ba",
        RoleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        username: 'adith',
        password: "62eb55dbdeb217018b7c4b0f8fe814b21978501f2c6508002ec8b57596ba",
        RoleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        username: 'dayat',
        password: "62eb55dbdeb217018b7c4b0f8fe814b21978501f2c6508002ec8b57596ba",
        RoleId: 1,
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
