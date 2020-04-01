require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const router = require('./routes/index')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', router)

app.use((err, req, res, next) => {
    console.log(err)
    if (err.name == 'Error') {
        return res.status(400).json({
            errors: err.errors
        })
    } else if (err.name == 'Internal Server') {
        return res.status(500).json({
            errors: err.errors
        })
    } else if (err.name == 'Bad Request') {
        res.status(400).json({
            errors: err.errors
        })
    } else if (err.name == 'Not Found') {
        res.status(404).json({
            errors: err.errors
        })
    } else if (err.name == 'Unauthorized') {
        res.status(401).json({
            errors: err.errors
        })
    } else if (err.name == 'SequelizeValidationError') {
        const errors = err.errors.map(el => ({
            message: el.message
        }))

        res.status(400).json({
            errors
        })
    } else if (err.name == 'JsonWebTokenError') {
        return res.status(401).json({
            errors: [{
                message: 'Please Login First'
            }]
        })
    } else {
        return res.status(500).json({
            errors: err.errors
        })
    }

})


app.listen(port, () => console.log(`Port : ${port}`))