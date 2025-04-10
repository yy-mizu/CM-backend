'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      assignedObject: {
        type: Sequelize.INTEGER,
        references: {
          model: 'A_objectives', 
          key: 'id',
        },
        
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      
      employeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees', 
          key: 'id',
        },
        
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      assignedDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Personals');
  }
};
