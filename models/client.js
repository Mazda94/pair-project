'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Client extends Model { }
  Client.init({
    name: DataTypes.STRING,
    balance: DataTypes.INTEGER
  }, { sequelize });
  Client.associate = function (models) {
    // associations can be defined here
    Client.hasMany(models.Stock, {
      through: models.Company
    }) 
  };
  return Client;
};