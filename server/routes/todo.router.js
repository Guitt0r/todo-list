const Router = require('express')
const TodoController = require('../controllers/todo.controller')

const todoRouter = new Router

todoRouter.get('/todos', TodoController.getAll)
todoRouter.post('/todos/new', TodoController.create)
todoRouter.delete('/todos/:id', TodoController.delete)
todoRouter.put('/todos/:id', TodoController.update)
todoRouter.put('/todos/complete/:id', TodoController.complete)

module.exports = todoRouter