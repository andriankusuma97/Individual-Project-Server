const {
  User
} = require('../models')


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


}

module.exports = RegisterController