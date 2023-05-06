const Router = require("express").Router
const router = new Router()
const userController = require("../controllers/user-controller")
const doctorController = require("../controllers/doctor-controller")
const mailController = require("../controllers/mail-controller")
const { body } = require("express-validator")
const authMiddlware = require("../middlware/auth-middlware")
const checkRoleMiddlware = require("../middlware/checkRole-middleware")
const upload = require('multer')();





router.post('/register',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users',  userController.getUsers)
router.get('/user/:id',  userController.getUser)
router.put('/user/update/:id', checkRoleMiddlware("ADMIN"),  authMiddlware, userController.updateUser)


router.get('/doctors', doctorController.getDoctors)
router.get('/doctor/:id', doctorController.getDoctor)
router.get('/doctorById/:userId', doctorController.getDoctorByUserID)
router.put('/doctor/update/:id', checkRoleMiddlware("DOCTOR"),  authMiddlware, doctorController.updateDoctor)



router.get('/mail/activate/:link')
router.post('/mail-send',
    body('name').isLength({ min: 2 }),
    body('email').isEmail(),
    body('text').isLength({ min: 6 }),
    mailController.mailSend
)



module.exports = router