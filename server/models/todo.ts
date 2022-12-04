import {Schema, model} from 'mongoose'
import {ITodo} from "../types";

const todoSchema = new Schema<ITodo>({
        text: {type: String, required: true},
        isComplete: {type: Boolean, default: false},
    },
    {timestamps: true}
)
const todo = model<ITodo>('Todo', todoSchema)

export default todo