// require('dotenv').config();
const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET)
}

const verification = (token) => {
    return jwt.verify(token, process.env.SECRET)
}

// console.log(generateToken('rainbowhat81'));
// console.log(verification('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyYW1hZGhhbm92aWNAZ21haWwuY29tIiwiaWF0IjoxNTg1NzM0MDc3fQ.jZLefqOANZdPGvj8XTzUX2t6s9MvadKQGeH3Nk-4Urg'));



module.exports = { generateToken, verification }