import React from 'react';
import ReactDOM from 'react-dom';
import {Formik, Field, Form} from 'formik';
import s from '../Todo/Todo.module.css'

const AddTodoForm = ({addTodo}) => (
    <div>
        <Formik
            initialValues={{
                text: '',
            }}
            onSubmit={(values,{resetForm}) => {
                addTodo(values)
                resetForm({values:''})
            }}
        >
            <Form className={s.todoWrapper}>
                <Field
                    name="text"
                    placeholder="New Todo..."
                    type="text"
                />
                <button className='btn btn-outline-light' type="submit" >Submit</button>
            </Form>
        </Formik>
    </div>
);

export default AddTodoForm