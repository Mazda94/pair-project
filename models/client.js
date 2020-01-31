'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Client extends Model { }

  Client.init({
    name: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    UserId : DataTypes.INTEGER
  }, { sequelize });
  Client.associate = function (models) {
    // associations can be defined here'

    Client.belongsTo(models.User)
    Client.belongsToMany(models.Company, {through : models.Stock})
  };
  return Client;
};