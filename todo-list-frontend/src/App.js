import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListTodos from './components/ListTodos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Router>
      <div className='mainContainer'>
      <Routes>
        <Route path="/" element = {<ListTodos />} />
        <Route exact path="/todos" element = {<ListTodos />}/>
        <Route path="/todos" element = {<AddTodo />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
