import React, { useState, useEffect } from 'react';
import TodoService from '../services/TodoService';
import AddTodo from './AddTodo';

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        TodoService.getAllTodos().then((response) => {
            setTodos(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div className='container'>
            <br /> <br />
            <div className='card'>
                <div className='title'>
                    <h2 className='text-center' style={{marginBlock: "25px"}}>To-Do List</h2>
                </div>
                <AddTodo onAdd={addTodo} /> {/* Include AddTodoComponent */}
                <div className='card-body'>
                    <table className='table table-hover'>
                        <thead className='thead-light'>
                            <tr>
                                <th>No.</th>
                                <th>Task</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? "Completed" : "Incomplete"}</td>
                                    <td>Edit & Delete</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListTodos;
