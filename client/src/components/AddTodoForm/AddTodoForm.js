import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

const AddTodoForm = ({addTodo}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => addTodo(data);
    errors.text && toast.warn('This field is required')
    return (
        <form className='max-w-full flex gap-2 m-2' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input className='bg-[#EBEFF2] text-[#888888] text-3xl p-2 rounded-lg '
                       placeholder='Note' {...register("text", {required: true})}/>
            </div>
            <input className='cursor-pointer bg-[#20EEB0] text-white text-5xl  px-5 rounded-lg font-bold' type="submit"
                   value='+'/>
        </form>
    );
}
export default AddTodoForm