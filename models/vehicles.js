'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define the association: Vehicle has many A_Vehicles
      Vehicles.hasMany(models.A_Vehicle, {
        foreignKey: 'vehicleId', // Foreign key to the A_Vehicle table
        as: 'a_vehicles',        // Alias for the relation
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Vehicles.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      status: DataTypes.STRING,
      license_plate: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Vehicles',
    }
  );
  return Vehicles;
};
