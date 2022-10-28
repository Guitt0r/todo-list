const Todo = require('../models/Todo')

class TodoController {
    async create(req, res) {
        try {
            const {text} = req.body
            const todo = await Todo.create({text})
            return res.status(200).json({data: todo})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const todos = await Todo.find()
            return res.status(200).json({data: todos})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const todo = await Todo.findByIdAndDelete(id)
            return res.status(200).json({data: todo})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params
            const {text} = req.body
            const todo = await Todo.findByIdAndUpdate(id, {text}, {new: true})
            return res.status(200).json({data: todo})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async complete(req, res) {
        try {
            const {id} = req.params
            const todo = await Todo.findById(id)
            todo.complete = !todo.complete
            await todo.save()
            return res.status(200).json({data: todo})
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

module.exports = new TodoController()