'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Clients', 'StockId')
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Clients', 'StockId' , Sequelize.INTEGER )

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
