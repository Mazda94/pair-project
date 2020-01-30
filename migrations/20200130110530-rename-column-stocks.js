'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Companies', 'stocks')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Companies', 'stocks',Sequelize.INTEGER)
  }
};
