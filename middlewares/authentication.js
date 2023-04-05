const { decodeToken } = require("../helper/jwt")
const { User } = require('../models')


async function authentication(req,res,next){
  try {
    // get token
    const {access_token} = req.headers
    // console.log(req.headers)

    //validate token
    if(!access_token) throw{name:"MissingToken"}

    //verify token
    let payload = decodeToken(access_token);
    // console.log(payload)

    //check availibe data 
    let user = await User.findByPk(payload.id)
    if(!user) throw {name:"invalidToken"}

    //save data in request
    req.user = {
      id: user.id,
      email : user.email,
      status : user.status
    }
    console.log(req.user.id,"<<<<dari authentication")
    //when be save data ,next to accses
    next()

  } catch (error) {
    next(error)
  }
}
module.exports = authentication