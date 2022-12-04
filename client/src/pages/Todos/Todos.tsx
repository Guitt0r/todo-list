import Todo from "../../components/Todo/Todo";
import {addTodo, getTodos} from "../../redux/todo-reducer";
import {FC, useEffect} from "react";
import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import {selectTodos} from "../../redux/todo-selector";
import Clock from "../../components/common/Clock/Clock";
import {useAppDispatch, useAppSelector} from "../../hooks/custom-react-redux";
import React from "react";

type Props = {}

const Todos: FC<Props> = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])
    const todos = useAppSelector(selectTodos)
    const onAddTodo = (text: string) => {
        dispatch(addTodo(text))
    }

    return (
        <div className='w-full sm:w-3/4 mx-auto bg-white shadow-lg rounded'>
            <div className='flex justify-center bg-gradient-to-r from-green-600 to-yellow-200'>
                <Clock/>
            </div>
            <div className='flex justify-center py-1 max-w-full'>
                <AddTodoForm addTodo={onAddTodo}/>
            </div>
            <div>
                {todos.map(todo => <Todo key={todo._id} {...todo}/>)}
            </div>
        </div>
    )
}
export default Todos
