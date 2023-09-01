'use strict';
/* IMPORTE El ARCHIVO CON EL MODELO */
const tipogClass = require('../models').tipogasto;


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
    await tipogClass.sync()
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    /* ELIMINACIÓN LA TABLA */
    await queryInterface.dropTable('tipogasto');
  }
};
