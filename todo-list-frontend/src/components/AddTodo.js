import React from 'react'
import {useState} from 'react';

const AddTodo = ({addTodo}) => {

    const[value, setValue] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        addTodo(value)
        setValue('');
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='Enter a new task'
            value={value}
            onChange={(e) => setValue(e.target.value)}>
            </input>
            <button type="submit">
                Add Task
            </button>
        </form>
    </div>
  )
}

export default AddTodo;
