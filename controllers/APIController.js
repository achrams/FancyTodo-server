const axios = require('axios')

class APIController {
    static getTimes(req, res, next) {
        let city = req.params.city
        let APIkey = process.env.APIkey
        axios.get(`https://muslimsalat.com/${city}.json?key=${APIkey}`)
            .then((result) => {
                let data = result.data
                return res.status(200).json({
                    data
                })
            })
            .catch((err) => {
                return next(err)
            });
    }
}

module.exports = APIController