const { Todo } = require('../models')

function authorization(req, res, next) {
    Todo.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (result) {
                if (result.userId == req.currentUserId) {
                    return next()
                }
            } else {
                return res.status(404).json({
                    name: "Not Found",
                    errors: "User Not Found"
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                name: "Internal Server",
                errors: [{ message: "Error" }]
            })
        })

}

module.exports = authorization