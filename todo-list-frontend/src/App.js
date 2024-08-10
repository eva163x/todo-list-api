import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListTodos from './components/ListTodos';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <Router>
      <div className='mainContainer'>
      <Routes>
        <Route path="/" element = {<ListTodos />} />
        <Route exact path="/todos" element = {<ListTodos />}/>
        <Route path="/todos" element = {<AddTodo />} />
        <Route path="/edit-todos" element = {<EditTodo />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
