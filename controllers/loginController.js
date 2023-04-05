const { checkPassword } = require('../helper/passwordBcrypt')
const {encodeToken} = require("../helper/jwt")
const { User } = require('../models')


class LoginController{
  
  static async addLogin(req,res,next){
    try {
      const {email,password} = req.body
      
      console.log(email,password ,"<<<dari login")
      if(!email || !password){
        throw {name:"invalid email/password"}
      }

      let findUser = await User.findOne({where:{email}})
      console.log(findUser)
      if(!findUser){
        throw {name:"invalid email/password"}
      }
      // compare pasword use bycriptjs
      const passwordValidate = checkPassword(password,findUser.password)
      
      if(!passwordValidate){
        throw {name:"invalid email/password"}
      }

      // make new token JWT
      const payload = {
        id : findUser.id
      }
      const access_token= encodeToken(payload)
      res.status(200).json({access_token,email,status:findUser.status})

    } catch (error) {
      next(error)
    }
    
  }
}

module.exports = LoginController