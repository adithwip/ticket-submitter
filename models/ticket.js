'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ticket = sequelize.define('Ticket', {
    ticket: DataTypes.STRING,
    title: DataTypes.STRING,
    close_status: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    DepartementId: DataTypes.INTEGER
  });
  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Departement)
    Ticket.belongsTo(models.User)
    Ticket.hasMany(models.Message)
  }


  return Ticket;
};
