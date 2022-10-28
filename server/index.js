const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
const todoRouter = require('./routes/todo.router')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', todoRouter)

const start = async () => {
    await mongoose.connect(process.env.DB_URL)
    app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
}
start()