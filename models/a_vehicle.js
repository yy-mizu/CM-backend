'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class a_vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  a_vehicle.init({
    a_objId: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER,
    assignedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'a_vehicle',
  });
  return a_vehicle;
};