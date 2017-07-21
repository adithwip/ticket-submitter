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
    return queryInterface.bulkInsert('Messages', [{
        message: 'Halo halo',
        from: 1,
        TicketId: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      }, {
        message: 'Selamat pagi',
        from: 1,
        TicketId: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      }, {
        message: 'Sore',
        from: 1,
        TicketId: 3,
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
    return queryInterface.bulkDelete('Messages', null, {});
  }
};
