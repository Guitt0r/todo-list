import {todoAPI} from "../api/api";

const SET_TODOS_SUCCESS = 'todo/SET_TODOS_SUCCESS'
const ADD_TODO_SUCCESS = 'todo/ADD_TODO_SUCCESS'
const CHANGE_TODO_SUCCESS = 'todo/CHANGE_TODO_SUCCESS'
const DELETE_TODO_SUCCESS = 'todo/DELETE_TODO_SUCCESS'
const initialState = {
    todos: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.todos
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case CHANGE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.todo._id)
                        return {...todo, ...action.todo}
                    return todo
                })
            }
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.todo._id)
            }
        default:
            return state
    }
}
const setTodosSuccess = (todos) => ({type: SET_TODOS_SUCCESS, todos})
const addTodoSuccess = (todo) => ({type: ADD_TODO_SUCCESS, todo})
const changeTodosSuccess = (todo) => ({type: CHANGE_TODO_SUCCESS, todo})
const deleteTodosSuccess = (todo) => ({type: DELETE_TODO_SUCCESS, todo})

export const getTodos = () => async (dispatch) => {
    const res = await todoAPI.getTodos()
    dispatch(setTodosSuccess(res.todos)
    )
}
export const addTodo = (text) => async (dispatch) => {
    const res = await todoAPI.addTodo(text)
    dispatch(addTodoSuccess(res.todo))
}
export const deleteTodo = (todoId) => async (dispatch) => {
    const res = await todoAPI.deleteTodo(todoId)
    dispatch(deleteTodosSuccess(res.todo))
}
export const completeTodo = (todoId) => async (dispatch) => {
    const res = await todoAPI.completeTodo(todoId)
    dispatch(changeTodosSuccess(res.todo))
}
export const updateTodoText = (todoId, text) => async (dispatch) => {
    const res = await todoAPI.saveTodo(todoId, text)
    dispatch(changeTodosSuccess(res.todo))
}