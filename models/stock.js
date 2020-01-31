'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Stock extends Model { }

  Stock.init({
    ClientId: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER
  }, { sequelize });
  Stock.associate = function (models) {
    // associations can be defined here
  };
  return Stock;
};