const router = require('express').Router()
const registerRouter = require('./registerRouter')
const loginRouter = require('./loginRouter')
const exerciseRouter = require('./exerciseRouter')
const errorHendler = require('../middlewares/errorHandler')
const authentication = require('../middlewares/authentication')



// REGISTER AND LOGIN
router.use('/register', registerRouter)
router.use('/login', loginRouter)
router.use('/exercise', exerciseRouter)

// MIDLEWARE-ACCSEC LOGIN
router.use(authentication)

//ROUTE ACCSES



//ERROR HENDLER
router.use(errorHendler)


module.exports = router