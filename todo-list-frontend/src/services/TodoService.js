import axios from 'axios';

const TODO_BASE_REST_API_URL = "http://localhost:8080/api/v1/todos";

class TodoService {

   getAllTodos(){

      return axios.get(TODO_BASE_REST_API_URL)
   }

   createTodo(todo){

       return axios.post(TODO_BASE_REST_API_URL, todo)
       
   }
}

export default new TodoService;