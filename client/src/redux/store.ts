import {Action, applyMiddleware, legacy_createStore} from "redux";
import todoReducer from "./todo-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";


export const store = legacy_createStore(todoReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>

export type AppActions<T> = T extends {[key:string]:(...args:any[])=>infer U} ? U : never
export type AppThunk<A extends Action> = ThunkAction<void, RootState, unknown, A>