import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/"
})

export const todoAPI = {
    async getTodos() {
        const res = await instance.get(`todos`)
        return res.data
    },
    async addTodo(text) {
        const res = await instance.post(`todos/new`, text)
        return res.data
    },
    async saveTodo(todosId, text) {
        const res = await instance.put(`todos/${todosId}`, {text})
        return res.data
    },
    async deleteTodo(todosId) {
        const res = await instance.delete(`todos/${todosId}`)
        return res.data
    },
    async completeTodo(todosId) {
        const res = await instance.put(`todos/complete/${todosId}`)
        return res.data
    }
}