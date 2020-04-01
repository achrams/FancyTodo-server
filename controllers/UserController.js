const { User } = require('../models')
const { decryptPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jsonwebtoken')


class UserController {

    static register(req, res, next) {
        let payload = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(payload)
            .then((resultdata) => {
                let userdata = {
                    id: resultdata.id,
                    email: resultdata.email
                }
                let token = generateToken(userdata)
                res.status(201).json({
                    id: userdata.id,
                    email: userdata.email,
                    access_token: token
                })
            }).catch((err) => {
                return next({
                    name: 'Error',
                    errors: [{ msg: err }]
                })
            });
    }

    static login(req, res, next) {
        let payload = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({
                where: {
                    email: payload.email
                }
            })
            .then((resultdata) => {
                console.log(resultdata.email)
                if (resultdata) {
                    let decrypt = decryptPassword(payload.password, resultdata.password)
                    if (decrypt) {
                        const userdata = {
                            id: resultdata.id,
                            email: resultdata.email,
                        }
                        let token = generateToken(userdata)

                        res.status(200).json({
                            id: userdata.id,
                            email: userdata.email,
                            access_token: token
                        })
                    } else {
                        res.status(400).json({
                            'type': 'Bad Request',
                            'msg': 'Invalid email/password'
                        })
                    }
                } else {
                    res.status(400).json({
                        'type': 'Bad Request',
                        'msg': 'Invalid email/password'
                    })
                }
            }).catch((err) => {
                return next({
                    name: 'Error',
                    errors: [{ msg: 'Internal Server Error' }]
                })
            });
    }
}

module.exports = UserController