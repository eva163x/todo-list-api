import React, { useState } from 'react';
import TodoService from '../services/TodoService';

const AddTodo = ({ onAdd }) => {
    const [task, setTask] = useState('');

    const saveTask = (e) => {
        e.preventDefault();
        if (task) {
            const newTodo = { title: task, completed: false };
            TodoService.createTodo(newTodo)
                .then(response => {
                    onAdd(response.data); // Pass the new todo to the parent component
                    setTask(''); // Clear the input field
                })
                .catch(error => console.log(error));
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                        <form onSubmit={saveTask} style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                placeholder='Enter a new task'
                                className='form-control'
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                style={{width: "200px", marginRight: '10px' }} // Stretch to fill space, with margin
                            />
                            <button type='submit' className='btn btn-success'>Add Task</button>
                        </form>
            </div>
        </div>
    );
};

export default AddTodo;
