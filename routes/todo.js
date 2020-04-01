const router = require('express').Router()
const TodoController = require('../controllers/TodoController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')


router.use(authentication)
router.get('/', TodoController.findAll)
router.post('/', TodoController.create)
router.get('/:id', TodoController.findOne)
router.put('/:id', TodoController.update)
router.delete('/:id', authorization, TodoController.delete)

module.exports = router