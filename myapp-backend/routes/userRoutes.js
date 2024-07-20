const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/user/:id', authMiddleware, userController.getUser)

module.exports = router
