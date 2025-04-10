"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class A_Objective extends Model {
    static associate(models) {
      // A_Objective belongs to a Project
      A_Objective.belongsTo(models.Project, {
        foreignKey: "projectId",
        as: "project",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      // A_Objective belongs to an Objective
      A_Objective.belongsTo(models.Objective, {
        foreignKey: "objectiveId",
        as: "objective",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      A_Objective.hasMany(models.A_Vehicle, {
        foreignKey: 'a_objId', // Foreign key reference
        as: 'vehicles',        // Alias for the relation
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      A_Objective.hasMany(models.Personal, {
        foreignKey: 'assignedObject', // Foreign key reference
        as: 'personals',              // Alias for the relation
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  A_Objective.init(
    {
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      objectiveId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "A_Objective",
      tableName: "A_objectives",
      timestamps: true,
    }
  );

  return A_Objective;
};
