import s from './Todo.module.css'
import {useState} from "react";
import deleteIcon from '../../../assets/deleteIcon.png'

const Todo = ({_id, text, complete, completeTodo, updateTodoText, deleteTodo}) => {
    //this is for editing todoItem text
    const [editMode, setEditMode] = useState(false)
    //this is for handle change in input
    const [inputText, setInputText] = useState(text)
    //func for complete/activate todoItem
    const onComplete = () => {
        completeTodo(_id)
    }
    //func for delete todoItem
    const onDelete = () => {
        deleteTodo(_id)
    }
    //handle input value change
    const onTextChange = (e) => {
        setInputText(e.target.value)
    }
    //to activate edit mode, where we can change text
    const activateEditMode = () => {
        setEditMode(true)
    }
    //to deactivate edit mode and dispatch updatedText
    const deactivateEditMode = () => {
        updateTodoText(_id, inputText)
        setEditMode(false)
    }

    return (
        <div className={s.todoWrapper}>
            <div className={`${s.todoText} ${complete && s.completeTodo}`}>
                {!complete ? editMode
                        //if todoItem is active,then input when editMode == true,text when editMode == false
                        ? <input value={inputText} onChange={onTextChange} autoFocus onBlur={deactivateEditMode}/>
                        : <span onDoubleClick={activateEditMode} title='Double click to edit'>{text}</span>
                    : <span>{text}</span>
                }
            </div>
            <div>
                <button className='btn btn-outline-light' onClick={onComplete}>
                    {complete ? 'Make active' : 'Complete'}
                </button>
                <img onClick={onDelete} className={s.deleteIcon} src={deleteIcon} alt='Delete'/>
            </div>
        </div>
    )
}
export default Todo