'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.changeColumn('Companies', 'stocks', Sequelize.STRING)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Companies', 'stocks', Sequelize.INTEGER)
  }
};
