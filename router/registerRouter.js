const RegisterController = require('../controllers/registerController')

const router = require('express').Router()


router.post('/',RegisterController.addRegister)
router.post('/google',RegisterController.addRegisterGoogle)



module.exports = router