import {Router} from "express";
import {asyncWrapper} from "../middlewares/async-wrapper.middleware";
import TodoController from "../controllers/todo.controller";

const todoRouter = Router()

todoRouter.post('/', asyncWrapper(TodoController.create.bind(TodoController)))
todoRouter.put('/:id', asyncWrapper(TodoController.update.bind(TodoController)))
todoRouter.delete('/:id', asyncWrapper(TodoController.delete.bind(TodoController)))
todoRouter.get('/', asyncWrapper(TodoController.getAll.bind(TodoController)))

export default todoRouter