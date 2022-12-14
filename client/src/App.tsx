import React, {FC} from "react";
import Todos from "./pages/Todos/Todos";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

type Props={}

const App:FC<Props> = () => {
    return (
        <div className='w-100vw'>
            <h1 className='font-clock text-3xl text-center'>React Todo list &copy; Guitt0r</h1>
            <Todos/>
            <ToastContainer/>
        </div>
    )
}
export default App