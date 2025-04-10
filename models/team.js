"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
      // Team has many Employees
      Team.hasMany(models.Employee, {
        foreignKey: "teamid",
        as: "employees",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Team.init(
    {
      teamName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Team",
      tableName: "Teams",
      timestamps: true,
    }
  );

  return Team;
};
