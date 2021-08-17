"use strict";
const katalog = require("./_Katalogs__202108171548.json");
console.log(katalog);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Katalogs", katalog.Katalogs);
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
