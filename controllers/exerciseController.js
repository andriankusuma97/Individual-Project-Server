const { User } = require('../models')
const axios = require('axios');
const midtransClient = require('midtrans-client');

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
          'X-RapidAPI-Key': '880c36d443msh53349d70b6622b5p175726jsn45745424a5f6',
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
          'X-RapidAPI-Key': '880c36d443msh53349d70b6622b5p175726jsn45745424a5f6',
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

  static async getAllKategoriExercise(req,res,next){
    try {
      let result = await axios({
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
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

  static async updateStatus(req,res,next){
    try {
      await User.update(
        { status:true },
        {
          where:{
            id: req.user.id
          }
          
        }
      )
      res.status(200).json(` user with id ${req.user.id} status update success `)
    } catch (error) {
      
    }
  }

  static async generateMidtrans(req,res,next){
    try {
      const findUser = await User.findByPk(req.user.id)
      if(findUser.status){
        throw {name: 'already_subscribed'}
      }
      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction : false,
        serverKey : process.env.MIDTRANS_SERVER_KEY
    });
    let parameter = {
      transaction_details: {
        order_id:"TRANSACTION"+ Math.floor(100000 + Math.random() * 90909899),
        gross_amount: 10000
      },
      credit_card:{
        secure : true
      },
      customer_details: {
          email: findUser.email,
      }
    }; 
      console.log(findUser.email)
      const midtransToken = await snap.createTransaction(parameter);
      console.log(midtransToken)
      res.status(200).json(midtransToken)
    } catch (error) {
      next(error)
    }
  }



}

module.exports = ExerciseController