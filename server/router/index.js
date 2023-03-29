const Router = require("express").Router
const router = new Router()
const userController = require("../controllers/user-controller")



router.post('/register', userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/users', userController.getUsers)
router.get('/refresh')
router.get('/doctor')

router.get('/mail/activate/:link')
router.get('/mail-send/')

module.exports = router