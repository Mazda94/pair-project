'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    companyName: DataTypes.STRING,
    changes: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    stocks: DataTypes.INTEGER
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};