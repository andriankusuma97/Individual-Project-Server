const { User } = require('../models')
const axios = require('axios');

class ExerciseController {
  static async getAllExercise(req,res,next){
    try {
      let result = await axios({
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': '54e25aa454msh263d2d6c5cf8f7fp1fc322jsn3eecab5368d0',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      let newData =result.data.slice(0,10)
      res.status(200).json(newData)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

module.exports = ExerciseController