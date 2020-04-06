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
                let access_token = generateToken(userdata)
                return res.status(201).json({
                    id: userdata.id,
                    email: userdata.email,
                    access_token
                })
            }).catch((err) => {
                return next({
                    name: 'SequelizeValidationError',
                    errors: [{ msg: err }]
                })
            });
    }

    static login(req, res, next) {
        let { email, password } = req.body
        let payload = { email, password }
        User.findOne({
                where: {
                    email: payload.email
                }
            })
            .then(result => {
                if (result) {
                    let compare = decryptPassword(payload.password, result.password)
                    if (compare) {
                        let { id, email } = result
                        let user = { id, email }
                        let token = generateToken(user)
                        console.log(token);
                        return res.status(200).json({
                            id: user.id,
                            access_token: token
                        })
                    } else {
                        return next({
                            name: "BadRequest",
                            errors: [{ msg: "Invalid Email / Password" }]
                        })
                    }
                } else {
                    return next({
                        name: "NotFound",
                        errors: [{ msg: "User Not Found " }]
                    })
                }
            })
            .catch(err => {
                return next({
                    name: 'InternalServerError',
                    errors: [{ msg: err }]
                })
            })
    }

    static googleSign(req, res, next) {
        let email = ''
        const client = new OAuth2Client(process.env.CLIENT_ID);

        client.verifyIdToken({
                idToken: req.body.id_token,
                audience: process.env.CLIENT_ID
            })
            .then(ticket => {
                email = ticket.getPayload().email
                return User.findOne({
                        where: {
                            email
                        }
                    })
                    .then(result => {
                        if (result) {
                            let payload = {
                                id: result.id,
                                email: result.email
                            }

                            let token = generateToken(payload)

                            res.status(200).json({
                                'access_token': token,
                                'msg': `Welcome Back, ${result.email}`
                            })
                        } else {
                            return User.create({
                                    email,
                                    password: process.env.DEFAULT_PASSWORD
                                })
                                .then(newCreate => {
                                    let payload = {
                                        id: newCreate.id,
                                        email: newCreate.email
                                    }

                                    let token = generateToken(payload)

                                    res.status(201).json({
                                        'access_token': token,
                                        'msg': 'First Time Google Sign In Successful'
                                    })
                                })
                                .catch(err => {
                                    return next(err)
                                })
                        }
                    })
                    .catch(err => {
                        return next(err)
                    })
            })
            .catch(err => {
                return next(err)
            })
    }
}

module.exports = UserController