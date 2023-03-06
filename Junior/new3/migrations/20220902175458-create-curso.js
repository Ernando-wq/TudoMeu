'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      grade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hours: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      inicio: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fim: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cursos');
  }
};