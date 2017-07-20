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
    return queryInterface.bulkInsert('Tickets', [{
        ticket: 'aRe231',
        title: 'router gak bisa konek',
        close_status: 1,
        UserId: 1,
        DepartmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ticket: 'akKe4k',
        title: 'modem macet',
        close_status: 1,
        UserId: 2,
        DepartmentId: 1,
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
