import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoService from '../services/TodoService';
import AddTodo from './AddTodo';

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    const addTodo = (task) => {

        const newTodo = {title: task, completed: false};

        TodoService.createTodo(newTodo).then((response) => {
            setTodos([...todos, response.data]);

        }).catch(error =>

            console.log(error)
        )

    }

    const handleComplete = (id) => {

        TodoService.getTodoById(id).then((response) => {

            const updatedTodo = response.data;
            updatedTodo.completed = true;

            TodoService.updateTodo(id, updatedTodo).then((response) => {

                setTodos(todos.map(todo => (todo.id === id ? response.data : todo))); //if id matches, sets that record to new record
            }).catch(error => {
    
                console.log(error)
            })
        })

    }

    function getAllTodos(){

        TodoService.getAllTodos().then((response) => {
            setTodos(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {

        getAllTodos();
        
    }, []);

    return (
        <div className='container'>
            <br /> <br />
            <div className='card'>
                <div className='title'>
                    <h2 className='text-center' style={{marginBlock: "25px"}}>To-Do List</h2>
                </div>
                <AddTodo addTodo={addTodo} /> 
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
                                    <td>
                                        <buttton className="btn btn-success" onClick={handleComplete(todo.id)}>
                                            Completed
                                        </buttton>
                                    </td>
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
