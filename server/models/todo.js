const mongoose = require('mongoose')
const {Schema, model} = mongoose

const todoSchema = new Schema({
        text: {type: String, required: true},
        isComplete: {type: Boolean, default: false},
    },
    {timestamps: true}
)

module.exports = model('Todo', todoSchema)