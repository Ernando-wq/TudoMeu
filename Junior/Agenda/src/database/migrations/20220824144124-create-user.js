'use strict';

module.exports = {
   up: (queryInterface, Sequelize) =>{
     return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      date:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      hours:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
