import { useParams } from "react-router-dom"
import React, {useState, useEffect} from 'react'

const EditTodo = ({editTodo}) => {

    const[title, setTitle] = useState('')
    const[completed, setCompleted] = useState('')
    const {id} = useParams()

  return (
    <div className='container'>
        <div className='card col-6'>
            <h1>Edit Task</h1>
            <form>
                <input
                type='text'
                placeholder= "some todo">
                </input>

                <input
                className='form-check-input'
                type='checkbox'
                name='flexCheckDefault'
                />
                <label class="form-check-label" for="flexCheckDefault">
                    Completed
                </label>
            </form>
        </div>

    </div>
  )
}

export default EditTodo;
