import {useState} from "react";
import DeleteButton from "../common/DeleteButton/DeleteButton";
import ToggleActiveButton from "../common/ToggleActiveButton/ToggleActiveButton";
import {useDispatch} from "react-redux";
import {completeTodo, deleteTodo, updateTodoText} from "../../redux/todo-reducer";
import {dateConvertor} from "../../utils/dateConvertor";

const Todo = ({_id, text, isComplete, updatedAt}) => {
    const [editMode, setEditMode] = useState(false)
    const [inputText, setInputText] = useState(text)
    const publishedDate = dateConvertor(updatedAt)
    const dispatch = useDispatch()

    const onComplete = () => {
        dispatch(completeTodo(_id))
    }
    const onDelete = () => {
        dispatch(deleteTodo(_id))
    }
    const onTextChange = (e) => {
        setInputText(e.target.value)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        dispatch(updateTodoText(_id, inputText))
        setEditMode(false)
    }

    return (
        <div className='flex items-center justify-between p-2'>
            <div className='text-3xl px-4'>
                {!isComplete ? editMode
                        ? <input value={inputText} onChange={onTextChange} autoFocus onBlur={deactivateEditMode}/>
                        : <span onDoubleClick={activateEditMode} title='Double click to edit'>{text}</span>
                    : <span className={isComplete && 'line-through text-[#888888]'}>{text}</span>
                }
                <div className='text-base text-[#888888]'>
                    {publishedDate}
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <ToggleActiveButton isActive={!isComplete} onToggle={onComplete}/>
                <DeleteButton onDelete={onDelete}/>
            </div>
        </div>
    )
}
export default Todo