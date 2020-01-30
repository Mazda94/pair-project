'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Companies', 'stocks', 'ticker')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Companies', 'ticker', 'stocks')
  }
};
