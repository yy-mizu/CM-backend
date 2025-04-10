'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class A_Vehicle extends Model {
    static associate(models) {
      // Define association: A_Vehicle belongs to A_Objective
      A_Vehicle.belongsTo(models.A_Objective, {
        foreignKey: 'a_objId',  // Foreign key reference
        as: 'objective',        // Alias for the relation
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      A_Vehicle.belongsTo(models.Vehicles, {
        foreignKey: 'vehicleId', // Foreign key to the Vehicles table
        as: 'vehicle',           // Alias for the relation
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  A_Vehicle.init(
    {
      a_objId: DataTypes.INTEGER,   // Foreign Key to A_Objective
      vehicleId: DataTypes.INTEGER, // Vehicle ID
      assignedDate: DataTypes.DATE, // Date of assignment
    },
    {
      sequelize,
      modelName: 'A_Vehicle',
      tableName: 'a_vehicles',
      timestamps: true,
    }
  );

  return A_Vehicle;
};
