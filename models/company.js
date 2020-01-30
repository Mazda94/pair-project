'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Company extends Model { }
  Company.init({
    companyName: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : 'Company name is required'
        }
      }
    },
    address: DataTypes.STRING,
    sector: DataTypes.STRING
  }, { sequelize });
  Company.associate = function (models) {
    // associations can be defined here
  };
  return Company;
};