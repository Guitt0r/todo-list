import express from 'express'
import cors from 'cors'
import todoRouter from "./routes/todo.router";
import mongoose from "mongoose";
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use('/api/todos', todoRouter)

mongoose.connect(`${process.env.DB_URL}`, (error) => {
    if (error) return console.log(error.message)
    console.log(`Db running...`)
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
})
