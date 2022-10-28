import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {todoReducer} from "./todoReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    todoPage: todoReducer
})

export const store = legacy_createStore(reducers, applyMiddleware(thunk))