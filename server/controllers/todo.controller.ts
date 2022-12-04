import TodoService from "../services/todo.service";
import {Request, Response} from "express";


class TodoController {
    constructor(private todoService: TodoService) {
    }

    async create(req: Request, res: Response) {
        return this.todoService.create(req.body)
    }

    async getAll(req: Request, res: Response) {
        return this.todoService.findAll()
    }

    async delete(req: Request, res: Response) {
        return this.todoService.delete(req.params.id)
    }

    async update(req: Request, res: Response) {
        return this.todoService.update(req.params.id, req.body)
    }

}

const todoController = new TodoController(new TodoService())

export default todoController
