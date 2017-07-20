'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    message: DataTypes.STRING,
    from: DataTypes.INTEGER,
    TicketId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Message.associate = (models) => {
    Message.belongsTo(models.Ticket)
  }
  return Message;
};
