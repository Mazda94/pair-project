'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  const convertValue = require ('../helper/convertValue')

  class Company extends Model { }

  Company.init({
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
  Company.associate = function (models) {
    // associations can be defined here
  };
  return Company;
};