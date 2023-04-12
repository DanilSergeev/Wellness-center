const Router = require("express").Router
const router = new Router()
const userController = require("../controllers/user-controller")
const doctorController = require("../controllers/doctor-controller")
const mailController = require("../controllers/mail-controller")
const { body } = require("express-validator")
const authMiddlware = require("../middlware/auth-middlware")
const checkRoleMiddlware = require("../middlware/checkRole-middleware")





router.post('/register',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/users',  userController.getUsers)
router.get('/refresh', userController.refresh)

router.get('/doctors', doctorController.getDoctors)
router.get('/doctor/:id', doctorController.getDoctor)



router.get('/mail/activate/:link')
router.post('/mail-send',
    body('name').isLength({ min: 2 }),
    body('email').isEmail(),
    body('text').isLength({ min: 6 }),
    mailController.mailSend
)
router.put('/doctor/update/:id', checkRoleMiddlware("DOCTOR"),  authMiddlware, doctorController.updateDoctor)



module.exports = router