'use strict';
module.exports = function(sequelize, DataTypes) {
  const mkey = require('../helpers/mkey');
  const encryptpass = require('../helpers/encryptpass');
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    RoleId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: models => {
        let sec =  'final'
        let pass = encryptpass(models.password, sec)
        models.password = pass;
        models.secret = sec
      },
      beforeUpdate: models => {
        let sec =  'final'
        let pass = encryptpass(models.password, sec)
        models.password = pass
        models.secret = sec
      }
    }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Departement, { through: 'Tickets' })
  }
  return User;
};
