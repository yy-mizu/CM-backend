'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('a_vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      a_objId: { // Foreign key reference to A_Objective
        type: Sequelize.INTEGER,
        references: {
          model: 'A_Objectives', // Reference the A_Objectives table
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      vehicleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vehicles', // Reference to Vehicles table
          key: 'id',
        },
        onDelete: 'CASCADE',  // It's good practice to add CASCADE here as well
        onUpdate: 'CASCADE',
      },
      assignedDate: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('a_vehicles');
  }
};
