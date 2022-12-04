import {ChangeEvent, FC, useState} from "react";
import DeleteButton from "../common/DeleteButton/DeleteButton";
import ToggleActiveButton from "../common/ToggleActiveButton/ToggleActiveButton";
import {deleteTodo, updateTodo} from "../../redux/todo-reducer";
import {dateConvertor} from "../../utils/dateConvertor";
import {TodoType} from "../../types/Todo.type";
import {useAppDispatch} from "../../hooks/custom-react-redux";
import React from "react";

type Props = TodoType

const Todo: FC<Props> = ({_id, text, isComplete, updatedAt}) => {
    const [editMode, setEditMode] = useState(false)
    const [inputText, setInputText] = useState(text)
    const publishedDate = dateConvertor(updatedAt)
    const dispatch = useAppDispatch()

    const onComplete = () => {
        dispatch(updateTodo(_id, {isComplete: !isComplete}))
    }
    const onDelete = () => {
        dispatch(deleteTodo(_id))
    }
    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        dispatch(updateTodo(_id, {text: inputText}))
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