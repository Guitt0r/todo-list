import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/"
})

export const todoAPI = {
    //get all todos from database
    async getTodos() {
        const res = await instance.get(`todos`)
        return res.data
    },
    //add todoItem to database
    async addTodo(text) {
        const res = await instance.post(`todos/new`, text)
        return res.data
    },
    //update todoItem's text in database
    async saveTodo(todosId, text) {
        const res = await instance.put(`todos/${todosId}`, {text})
        return res.data
    },
    //delete todoItem from database
    async deleteTodo(todosId) {
        const res = await instance.delete(`todos/${todosId}`)
        return res.data
    },
    //toggle todoItem complete field in database
    async completeTodo(todosId) {
        const res = await instance.put(`todos/complete/${todosId}`)
        return res.data
    }
}