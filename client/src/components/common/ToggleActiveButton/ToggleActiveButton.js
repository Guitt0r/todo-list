import Active from '../../../assets/Active.svg'
import Completed from '../../../assets/Completed.svg'

const ToggleActiveButton = ({isActive, onToggle}) => {
    return (
        <div>
            <img className='cursor-pointer object-fill w-10 h-10' src={isActive ? Active : Completed}
                 onClick={onToggle}
                 alt={isActive ? 'Complete' : 'Reactivate'}/>
        </div>
    )
}
export default ToggleActiveButton