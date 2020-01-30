'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  const convertValue = require('../helper/convertValue')

  class Stock extends Model { }

  Stock.init({
    companyName: DataTypes.STRING,
    changes: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    ticker: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instances, options) {
        // console.log(instances.price)
        instances.price = convertValue(instance.price)
      }
    }, sequelize
  });
  Stock.associate = function (models) {
    // associations can be defined here
    Stock.hasMany(models.Client, {
      through: models.Company
    })
  }
  return Stock
}