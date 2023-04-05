const router = require('express').Router()
const registerRouter = require('./registerRouter')
const loginRouter = require('./loginRouter')
const exerciseRouter = require('./exerciseRouter')
const errorHendler = require('../middlewares/errorHandler')



// REGISTER AND LOGIN
router.use('/register', registerRouter)
router.use('/login', loginRouter)
router.use('/exercise', exerciseRouter)

// MIDLEWARE-ACCSEC LOGIN


//ROUTE ACCSES



//ERROR HENDLER
router.use(errorHendler)


module.exports = router