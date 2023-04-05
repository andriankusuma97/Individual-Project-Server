const router = require('express').Router()
const registerRouter = require('./registerRouter')
const loginRouter = require('./loginRouter')



// REGISTER AND LOGIN
router.use('/register', registerRouter)
router.use('/login', loginRouter)

// MIDLEWARE-ACCSEC LOGIN


//ROUTE ACCSES



//ERROR HENDLER



module.exports = router