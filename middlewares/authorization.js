const { Todo } = require('../models')

function authorization(req, res, next) {
    Todo.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            // console.log(result);
            let res_id = result.UserId
                // console.log('currentuserid: ' + req.currentUserId);
                // console.log('resid :' + res_id)
            if (res_id == req.currentUserId) {
                next()
            } else {
                return res.status(401).json({
                    name: "BadRequest",
                    errors: "Unauthorized"
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