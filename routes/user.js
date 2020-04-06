const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googleSign', UserController.googleSign)
module.exports = router