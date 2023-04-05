'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
  
    static associate(models) {
      // define association here
      Exercise.belongsToMany(models.User,{through:models.MyExercise,foreignKey:"ExerciseId"})
    }
  }
  Exercise.init({
    bodyPart: DataTypes.STRING,
    equipment: DataTypes.STRING,
    gifUrl: DataTypes.STRING,
    name: DataTypes.STRING,
    target: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exercise',
  });
  return Exercise;
};