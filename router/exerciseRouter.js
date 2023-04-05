const ExerciseController = require('../controllers/exerciseController')

const router = require('express').Router()

router.get('/',ExerciseController.getAllExercise)
router.post('/bmi',ExerciseController.getAlllBmi)


module.exports = router