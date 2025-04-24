"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      // One Project belongs to One User
      Project.belongsTo(models.User, {
        foreignKey: "userId",
        as: "User",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Project.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      business_partner: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customer_representative: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      staff_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      site_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Project",
      tableName: "Projects",
      timestamps: true,
    }
  );
  

  Project.associate = (models) => {
    // Project has many A_Objectives
    Project.hasMany(models.A_Objective, {
      foreignKey: "projectId",
      as: "a_objectives",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  

  return Project;
};
