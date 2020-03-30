const { Todo } = require('../models')

class TodoController {
    static findAll(req, res) {
        Todo.findAll()
            .then(alldata => {
                res.status(200).json({ alldata })
            })
            .catch(err => {
                res.status(500).json({
                    "type": "Error",
                    "msg": "Internal Server Error"
                })
            })
    }

    static findOne(req, res) {
        let id = +req.params.id
        Todo.findOne({ where: { id: id } })
            .then(data => {
                if (data) res.status(200).json({ data })
                else res.status(404).json({
                    "type": "Error",
                    "msg": "Data Not Found"
                })
            })
            .catch(err => {
                res.status(500).json({
                    "type": "Error",
                    "msg": "Internal Server Error"
                })
            })
    }

    static create(req, res) {
        let { title, description, status, due_date } = req.body
        let newdata = {
            title,
            description,
            status,
            due_date
        }
        Todo.create(newdata)
            .then(data => {
                res.status(201).json({ newtododata: data })

            })
            .catch(err => {
                res.status(500).json({
                    "type": "Error",
                    "msg": "Internal Server Error"
                })
            })
    }

    static update(req, res) {
        let id = +req.params.id
        let { title, description, status, due_date } = req.body
        let updatedData = {
            title,
            description,
            status,
            due_date
        }

        Todo.findOne({ where: { id: id } })
            .then(result => {
                if (!result) res.status(404).json({
                    "type": "Error",
                    "msg": "Data not found"
                })
                else {
                    Todo.update(updatedData, { where: { id: result.id } })
                        .then(updated => {
                            res.status(200).json({ updatedData })
                        })
                }
            })
            .catch(err => {
                res.status(500).json({
                    "type": "Error",
                    "msg": "Internal Server Error"
                })
            })
    }

    static delete(req, res) {
        let id = +req.params.id

        Todo.findOne({ where: { id: id } })
            .then(data => {
                if (!data) res.status(404).json({
                    "type": "Error",
                    "msg": "Data not found"
                })
                else {
                    Todo.destroy({ where: { id: id } })
                        .then(deleted => {
                            res.status(200).json({ data, deleted })
                        })
                }
            })
            .catch(err => {
                res.status(500).json({
                    "type": "Error",
                    "msg": "Internal Server Error"
                })
            })

    }
}

module.exports = TodoController