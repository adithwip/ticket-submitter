'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ticket = sequelize.define('Ticket', {
    ticket: DataTypes.STRING,
    title: DataTypes.STRING,
    close_status: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    DepartementId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ticket;
};
