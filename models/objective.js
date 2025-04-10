"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Objective extends Model {
    static associate(models) {
      // Objective has many A_Objectives
      Objective.hasMany(models.A_Objective, {
        foreignKey: "objectiveId",
        as: "a_objectives",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Objective.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Objective",
      tableName: "Objectives",
      timestamps: true,
    }
  );

  return Objective;
};
