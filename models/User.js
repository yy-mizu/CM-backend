"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "Users",
      timestamps: true,
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Company, {
      foreignKey: "companyId",
      as: "company",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return User;
};
