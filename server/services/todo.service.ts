import Todo from "../models/todo";
import {ITodo} from "../types";

class TodoService {
    async create(todo: ITodo) {
        const newTodo = await Todo.create(todo)
        return newTodo
    }

    async update(todoId: string, todo: ITodo) {
        const updatedTodo = await Todo.findByIdAndUpdate(todoId, {$set: todo}, {new: true})
        return updatedTodo
    }

    async delete(todoId: string) {
        const todo = await Todo.findByIdAndDelete(todoId)
        return todo
    }

    async findAll() {
        const todos = await Todo.find()
        return todos
    }
}

export default TodoService