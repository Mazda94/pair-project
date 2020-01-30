'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Role extends Model {}

  Role.init({
    name: DataTypes.STRING
  }, {sequelize});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};