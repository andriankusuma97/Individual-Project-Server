const ExerciseController = require('../controllers/exerciseController')

const router = require('express').Router()

router.get('/',ExerciseController.getAllExercise)
router.post('/bmi',ExerciseController.getAlllBmi)
router.get('/rekomendasi/:data',ExerciseController.getRekomendasiExercise)


module.exports = router