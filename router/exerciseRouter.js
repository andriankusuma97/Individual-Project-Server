const ExerciseController = require('../controllers/exerciseController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.get('/',ExerciseController.getAllExercise)
router.post('/bmi',ExerciseController.getAlllBmi)
router.get('/type',ExerciseController.getAllKategoriExercise)




router.use(authentication)

router.post('/token',ExerciseController.generateMidtrans)
router.get('/rekomendasi/:data',ExerciseController.getRekomendasiExercise)
router.patch('/status',ExerciseController.updateStatus)



module.exports = router