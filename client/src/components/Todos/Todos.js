import Todo from "./Todo/Todo";
import {connect} from "react-redux";
import {addTodo, completeTodo, deleteTodo, getTodos, updateTodoText} from "../../redux/todoReducer";
import {useEffect} from "react";
import AddTodoForm from "./AddTodoForm/AddTodoForm";

const Todos = ({todos, getTodos, completeTodo,updateTodoText,addTodo,deleteTodo}) => {
    //get all todos and setting them when component is rendered
    useEffect(() => {
        getTodos()
    }, [])
    //map all todos and return each as a component
    const todoItems = todos.map(todo => <Todo key={todo._id} {...todo} completeTodo={completeTodo}
                                              updateTodoText={updateTodoText} deleteTodo={deleteTodo}/>)
    return (
        <div>
            <div>
                {todoItems}
            </div>
            <div>
                <AddTodoForm addTodo={addTodo}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todoPage.todos
})

export default connect(mapStateToProps, {getTodos, addTodo, deleteTodo, completeTodo, updateTodoText})(Todos)
