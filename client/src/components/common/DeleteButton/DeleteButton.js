import deleteIcon from '../../../assets/delete.svg'

const DeleteButton=({onDelete})=>{
    return(
        <div >
            <img className='object-fit w-10 h-10 cursor-pointer' onClick={onDelete}  src={deleteIcon} alt='Delete'/>
        </div>
    )
}
export default DeleteButton