'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Company extends Model { }

  Company.init({
    companyName: DataTypes.STRING,
    changes: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    ticker: DataTypes.STRING
  }, {
    hooks: {
      beforeBulkCreate(instances, options) {
        console.log(instances)
      }
    }, sequelize
  });
  Company.associate = function (models) {
    // associations can be defined here
  };
  return Company;
};