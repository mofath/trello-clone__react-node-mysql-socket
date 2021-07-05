'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: 'a741dfa6-24de-4b46-afc7-370772f068d8',
      username: 'client',
      password: '123456789',
      role: 'client',
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};