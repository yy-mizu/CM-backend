'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class A_Objective extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  A_Objective.init({
    projectId: DataTypes.INTEGER,
    objectiveId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'A_Objective',
  });
  return A_Objective;
};