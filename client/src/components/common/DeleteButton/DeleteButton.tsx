import deleteIcon from '../../../assets/delete.svg'
import {FC} from "react";
import React from 'react';

type Props = {
    onDelete: () => void
}

const DeleteButton: FC<Props> = ({onDelete}) => {
    return (
        <div>
            <img className='object-fit w-10 h-10 cursor-pointer' onClick={onDelete} src={deleteIcon} alt='Delete'/>
        </div>
    )
}
export default DeleteButton