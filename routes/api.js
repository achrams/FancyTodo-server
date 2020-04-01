const router = require('express').Router()
const APIController = require('../controllers/APIController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/:city', APIController.getTimes)

module.exports = router