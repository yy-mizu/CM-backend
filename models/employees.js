'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // Employee has many Personals
      Employee.hasMany(models.Personal, {
        foreignKey: 'employeeId',
        as: 'personals',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Employee.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      role: DataTypes.STRING,
      displayName: DataTypes.STRING,
      teamid: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Employee',
      tableName: 'Employees',
      timestamps: true,
    }
  );


  return Employee;
};
