const router = require('express').Router()

const todo = require('./todo')
const user = require('./user')
const api = require('./api')

router.get('/', (req, res) => res.send(`Success`))

router.use('/users', user)
router.use('/todos', todo)
router.use('/api', api)



module.exports = router