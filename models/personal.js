'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Personal extends Model {
    static associate(models) {
      // Personal belongs to Employee
      Personal.belongsTo(models.Employee, {
        foreignKey: 'employeeId',
        as: 'employee',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Personal.belongsTo(models.A_Objective, {
        foreignKey: 'assignedObject', // Foreign key reference to A_Objective
        as: 'objective',              // Alias for the relation
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Personal.init(
    {
      assignedObject: DataTypes.INTEGER,
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      assignedDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Personal',
      tableName: 'Personals',
      timestamps: true,
    }
  );

  return Personal;
};
