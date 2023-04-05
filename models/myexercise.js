'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyExercise extends Model {
   
    static associate(models) {
      // define association here
      MyExercise.belongsTo(models.User,{foreignKey:"UserId"})
      MyExercise.belongsTo(models.Exercise,{foreignKey:"ExerciseId"})
    }
  }
  MyExercise.init({
    UserId: DataTypes.INTEGER,
    ExerciseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MyExercise',
  });
  return MyExercise;
};