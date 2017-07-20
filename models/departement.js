'use strict';
module.exports = function(sequelize, DataTypes) {
  var Departement = sequelize.define('Departement', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    RoleId: DataTypes.INTEGER
  });

  Departement.associate = (models) => {
    Departement.belongsToMany(models.User, { through: 'Tickets' })
  }
  return Departement;
};
