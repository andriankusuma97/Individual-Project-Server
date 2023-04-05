const ExerciseController = require('../controllers/exerciseController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.get('/',ExerciseController.getAllExercise)
router.post('/bmi',ExerciseController.getAlllBmi)
router.use(authentication)
router.get('/rekomendasi/:data',ExerciseController.getRekomendasiExercise)


module.exports = router