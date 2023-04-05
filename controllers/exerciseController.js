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
      next(error)
    }
  }

  static async getAlllBmi (req,res,next){
    try {
      const {weight,height1} = req.body
      // let weight = toString(weight1)
      // let height = toString(height1)
      // console.log(height1,"<<<<<" )
      let number = parseFloat(height1) / 100;
      let height = number.toString();
      console.log(weight, height,"<<<<")
      let result = await axios({
        method: 'GET',
        url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
        params: {weight, height},
        headers: {
          'X-RapidAPI-Key': '54e25aa454msh263d2d6c5cf8f7fp1fc322jsn3eecab5368d0',
          'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
        }
      })
      console.log(weight, height,"<<<<")
      console.log(result.data,"<<<<")
      let data_bmi = result.data.bmi
      let kategory = await axios({
        method: 'GET',
        url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category',
        params: {bmi: `${data_bmi}`},
        headers: {
          'X-RapidAPI-Key': '54e25aa454msh263d2d6c5cf8f7fp1fc322jsn3eecab5368d0',
          'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
    }
      })
      res.status(200).json(kategory.data)
    } catch (error) {
      next(error)
    }
  }

  static async getRekomendasiExercise (req,res,next){
    try {
      const {data} = req.params
      console.log(data,"<<<< rekomendasi")
      let result = await axios({
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/'+ data,
        headers: {
          'X-RapidAPI-Key': '54e25aa454msh263d2d6c5cf8f7fp1fc322jsn3eecab5368d0',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      let newData =result.data.slice(0,10)
      // console.log(result.data,"<<<<< dari rekoemendasi data")
      res.status(200).json(newData)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = ExerciseController