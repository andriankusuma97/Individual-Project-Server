const ExerciseController = require('../controllers/exerciseController')

const router = require('express').Router()

router.get('/',ExerciseController.getAllExercise)


module.exports = router