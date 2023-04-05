const LoginController = require('../controllers/loginController')

const router = require('express').Router()

router.post('/',LoginController.addLogin)


module.exports = router