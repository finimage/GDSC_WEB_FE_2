import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const addToDoItem = (item) => {
    setToDoItems([...toDoItems, item]);
  };

  const removeToDoItem = (index) => {
    const newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    setToDoItems(newToDoItems);
  };

  return (
    <div className='App'>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <Routes>
          <Route path='/' element = {
            <>
            <ToDoForm addToDoItem={addToDoItem}/>
            <ToDoList toDoItems={toDoItems} removeToDoItem={removeToDoItem}/>
            </>
          }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
