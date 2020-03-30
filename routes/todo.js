const router = require('express').Router()
const TodoController = require('../controllers/TodoController')

router.get('/', TodoController.findAll)
router.post('/', TodoController.create)
router.get('/:id', TodoController.findOne)
module.exports = router