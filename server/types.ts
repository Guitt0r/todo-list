import {Document} from 'mongoose'

export interface ITodo extends Document {
    text: string,
    isComplete: boolean,
}