'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      km: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      exchange: {
        type: Sequelize.ENUM,
        values: [
          'auto', 'manual'
        ],
        defaultValue: 'manual',
        allowNull: false
      },
      observation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      board: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};