'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'jonistik@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    await queryInterface.bulkInsert('Assignments', [{
      description: 'Assignment 1',
      context: 'const a = 1;',
      display_code: 'function sum(a,b) { //write your solution here}',
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    await queryInterface.bulkInsert('UserAssignments', [{
      user_id: 1,
      assignment_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
