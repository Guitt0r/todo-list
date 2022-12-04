import React from 'react';
import Active from '../../../assets/Active.svg'
import Completed from '../../../assets/Completed.svg'
import {FC} from "react";

type Props = {
    isActive: boolean,
    onToggle: () => void
}

const ToggleActiveButton: FC<Props> = ({isActive, onToggle}) => {
    return (
        <div>
            <img className='cursor-pointer object-fill w-10 h-10' src={isActive ? Active : Completed}
                 onClick={onToggle}
                 alt={isActive ? 'Complete' : 'Reactivate'}/>
        </div>
    )
}
export default ToggleActiveButton