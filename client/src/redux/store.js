import {applyMiddleware, legacy_createStore} from "redux";
import {todoReducer} from "./todo-reducer";
import thunk from "redux-thunk";


export const store = legacy_createStore(todoReducer, applyMiddleware(thunk))