'use strict';
module.exports = function(sequelize, DataTypes) {
  var Departement = sequelize.define('Departement', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    RoleId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Departement;
};