
const { decodeToken } = require("../helper/jwt")
const { User } = require('../models')
require('dotenv').config();

async function authorization(req,res,next){
  try {
    let UserId = req.user.id
    let userStatus = req.user.status
    let dataUser = await User.findByPk(UserId)
    if(!dataUser) throw{name:"NotFound"}
    if(userStatus === true){
      next()
    }else { 
      throw {name:"Frobidden"}
    }
  } catch (error) {
    next(error)
  }
}



module.exports = {authorization , editStatusAuthorization }