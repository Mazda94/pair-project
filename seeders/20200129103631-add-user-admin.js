'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { username: 'Super Admin', email: 'superadmin@mail.com', password: 'admin123', RoleId : 1, createdAt: new Date(), updatedAt: new Date() }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
