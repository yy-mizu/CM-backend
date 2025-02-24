"use strict";

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "Companies",
      timestamps: true,
    }
  );

  Company.associate = (models) => {
    Company.hasMany(models.User, {
      foreignKey: "companyId",
      as: "users",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Company;
};
