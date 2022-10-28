const mongoose = require('mongoose')
const {Schema, model} = mongoose

const todoSchema = new Schema({
    text: {type: String, required: true},
    complete: {type: Boolean, default: false},
    timestamp: {type: String, default: Date.now()}
})

module.exports = model('Todo', todoSchema)