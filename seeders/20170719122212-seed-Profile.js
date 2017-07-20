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
    return queryInterface.bulkInsert('Profiles', [{
        fullname: 'John Doe',
        email: 'johndoe@gmail.com',
        address: 'jl. doe john No. 70',
        phone: 989999,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        fullname: 'Jane Doe',
        email: 'janedoe@gmail.com',
        address: 'jl. doe jane No. 50',
        phone: 985555,
        UserId: 2,
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
