const Todo = require('../models/todo')

class TodoService {
    async create(text) {
        const todo = await Todo.create({text})
        return todo
    }

    async update(id, text) {
        const todo = await Todo.findByIdAndUpdate(id, {$set: {text}}, {new: true})
        return todo
    }

    async delete(id) {
        const todo = await Todo.findByIdAndDelete(id)
        return todo
    }

    async toggleIsComplete(id) {
        const todo = await Todo.findById(id)
        const toggledTodo = await Todo.findByIdAndUpdate(id, {$set: {isComplete: !todo.isComplete}}, {new: true})
        return toggledTodo
    }

    async findAll() {
        const todos = await Todo.find()
        return todos
    }
}

module.exports = new TodoService()