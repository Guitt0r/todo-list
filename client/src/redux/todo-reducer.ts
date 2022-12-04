import {todoAPI} from "../api/api";
import {TodoType} from "../types/Todo.type";
import {AppActions, AppThunk} from "./store";

type InitialState = {
    todos: TodoType[]
}
const initialState: InitialState = {
    todos: [],
}

const todoReducer = (state = initialState, action: Actions): InitialState => {
    switch (action.type) {
        case "todo/SET_TODOS_SUCCESS":
            return {
                ...state,
                todos: action.todos
            }
        case "todo/ADD_TODO_SUCCESS":
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case "todo/CHANGE_TODO_SUCCESS":
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.todo._id)
                        return {...todo, ...action.todo}
                    return todo
                })
            }
        case "todo/DELETE_TODO_SUCCESS":
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.todo._id)
            }
        default:
            return state
    }
}
export const actions = {
    setTodosSuccess: (todos: TodoType[]) => ({type: 'todo/SET_TODOS_SUCCESS', todos} as const),
    addTodoSuccess: (todo: TodoType) => ({type: 'todo/ADD_TODO_SUCCESS', todo} as const),
    changeTodosSuccess: (todo: TodoType) => ({type: 'todo/CHANGE_TODO_SUCCESS', todo} as const),
    deleteTodosSuccess: (todo: TodoType) => ({type: 'todo/DELETE_TODO_SUCCESS', todo} as const)
}

export const getTodos = (): Thunk => async (dispatch) => {
    const todos = await todoAPI.getAll()
    dispatch(actions.setTodosSuccess(todos)
    )
}
export const addTodo = (text: string): Thunk => async (dispatch) => {
    const todo = await todoAPI.create({text})
    dispatch(actions.addTodoSuccess(todo))
}
export const deleteTodo = (todoId: string): Thunk => async (dispatch) => {
    const todo = await todoAPI.delete(todoId)
    dispatch(actions.deleteTodosSuccess(todo))
}
export const updateTodo = (todoId: string, updateBody: Partial<TodoType>): Thunk => async (dispatch) => {
    const todo = await todoAPI.update(todoId, updateBody)
    dispatch(actions.changeTodosSuccess(todo))
}
type Actions = AppActions<typeof actions>
type Thunk = AppThunk<Actions>

export default todoReducer