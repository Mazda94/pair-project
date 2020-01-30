'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  const bcrypt = require('bcryptjs')


  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Field email is required'
        },
        isEmail: {
          msg: 'Email format is incorrect. e.g: example@mail.com'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Field username is required'
        },
        len: {
          args: [4, 20],
          msg: 'Username at least 4 character and max 20 character'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Field password is required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (instance, option) => {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(instance.password, salt)
        instance.password = hash
      } 
    },
      sequelize
  });

  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Role)
  };
  return User;
};