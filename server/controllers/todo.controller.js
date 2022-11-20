const TodoService = require('../services/todo.service')

class TodoController {
    async create(req, res) {
        try {
            const {text} = req.body
            const todo = await TodoService.create(text)
            return res.status(201).json({todo})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const todos = await TodoService.findAll()
            return res.status(200).json({todos})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const todo = await TodoService.delete(id)
            return res.status(200).json({todo})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params
            const {text} = req.body
            const todo = await TodoService.update(id, text,)
            return res.status(200).json({todo})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async complete(req, res) {
        try {
            const {id} = req.params
            const todo = await TodoService.toggleIsComplete(id)
            return res.status(200).json({todo})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

module.exports = new TodoController()