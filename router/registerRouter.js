const RegisterController = require('../controllers/registerController')

const router = require('express').Router()


router.post('/',RegisterController.addRegister)


module.exports = router