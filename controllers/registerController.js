const {
  User
} = require('../models')
const {
  OAuth2Client
} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_ID);
const {
  encodeToken
} = require('../helper/jwt');

class RegisterController {

  static async addRegister(req, res, next) {
    try {
      const {
        username,
        email,
        password,
      } = req.body

      const userRegister = await User.create({
        username,
        email,
        password,
        status: false,
      });
      res.status(201).json({
        id: userRegister.id,
        email: userRegister.email
      })
    } catch (error) {
      next(error)
    }

  }

  static async addRegisterGoogle(req,res,next){
    try {
      const googleToken = req.headers.google_token
      console.log(googleToken)
      const ticket = await client.verifyIdToken({
        idToken: googleToken,
        audience: process.env.GOOGLE_ID,
      });
      const payload = ticket.getPayload();
      console.log(payload)

      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email
        },
        defaults: {
          username: payload.name,
          email: payload.email,
          password: "default",
          status: false
        },
        hooks: false
      });
      const tokenId = {
        id: user.id
      }
      const access_token = encodeToken(tokenId)
      console.log(access_token,"<<<ini acces token")
      res.status(201).json({
        access_token,
        email: user.email,
        role: user.role,
      })
    
    } catch (error) {
      console.log(error)
      next(error)
    }

  }


}

module.exports = RegisterController