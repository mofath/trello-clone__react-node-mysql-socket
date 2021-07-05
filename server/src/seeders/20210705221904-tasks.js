'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tasks', [
      {
        "id": 'a741dfa1-24de-4b46-afc7-370772f068d8',
        "title": "write documentation",
        "price": "15",
        "description": "Write and disscuss project documentation",
        "status": "todo",
        "createdAt": '2020-01-01 10:10:10',
        "updatedAt": '2020-01-01 10:10:10',
      },
      {
        "id": 'a741dfa2-24de-4b46-afc7-370772f068d8',
        "title": "Design Database",
        "price": "25",
        "description": "Design database and entities",
        "status": "todo",
        "createdAt": '2020-01-01 10:10:10',
        "updatedAt": '2020-01-01 10:10:10',
      },
      {
        "id": 'a741dfa3-24de-4b46-afc7-370772f068d8',
        "title": "Design UX",
        "price": "20",
        "description": "Design UX and wireframe",
        "status": "todo",
        "createdAt": '2020-01-01 10:10:10',
        "updatedAt": '2020-01-01 10:10:10',
      },
      {
        "id": 'a741dfa4-24de-4b46-afc7-370772f068d8',
        "title": "Test Auth",
        "price": "20",
        "description": "Test autherization and authentication",
        "status": "in-progress",
        "createdAt": '2020-01-01 10:10:10',
        "updatedAt": '2020-01-01 10:10:10',
      },
      {
        "id": 'a741dfa5-24de-4b46-afc7-370772f068d8',
        "title": "Test API",
        "price": "10",
        "description": "Test API and get it to work",
        "status": "in-progress",
        "createdAt": '2020-01-01 10:10:10',
        "updatedAt": '2020-01-01 10:10:10',
      },
      {
        "id": 'a741dfa6-24de-4b46-afc7-370772f068d8',
        "title": "Data Entery",
        "price": "10",
        "description": "Record data and store in database",
        "status": "paid",
        "createdAt": '2020-01-01 10:10:10',
        "updatedAt": '2020-01-01 10:10:10',
      },
      {
        "id": 'a741dfa7-24de-4b46-afc7-370772f068d8',
        "title": "Integrate API",
        "price": "10",
        "description": "Integrate API with UI",
        "status": "paid",
        "createdAt": '2020-01-01 10:10:10',
        "updatedAt": '2020-01-01 10:10:10',
      },
      {
        "id": 'a741dfa8-24de-4b46-afc7-370772f068d8',
        "title": "Implement Checkout",
        "price": "10",
        "description": "Implement checkout and integrate with payment gateway",
        "status": "testing",
        "createdAt": '2020-01-01 10:10:10',
        "updatedAt": '2020-01-01 10:10:10',
      },
      {
        "id": 'a741dfa9-24de-4b46-afc7-370772f068d8',
        "title": "Design UI",
        "price": "10",
        "description": "Design beautiful UI according to wireframe",
        "status": "done",
        "createdAt": '2020-01-01 10:10:10',
        "updatedAt": '2020-01-01 10:10:10',
      }

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasks', null, {});
  }
};