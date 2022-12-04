import axios from "axios";
import {TodoType} from "../types/Todo.type";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/"
})

export const todoAPI = {
    async getAll() {
        const res = await instance.get<TodoType[]>(`todos`)
        return res.data
    },
    async create(newTodo: Partial<TodoType>) {
        const res = await instance.post<TodoType>(`todos`, newTodo)
        return res.data
    },
    async update(todoId: string, updateBody: Partial<TodoType>) {
        const res = await instance.put<TodoType>(`todos/${todoId}`, updateBody)
        return res.data
    },
    async delete(todoId: string) {
        const res = await instance.delete<TodoType>(`todos/${todoId}`)
        return res.data
    },
}