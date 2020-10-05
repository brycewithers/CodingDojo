import React, { useState } from 'react';
import Input from "./components/Input";
import Task from "./components/Task";
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      {todoList.map((task, i) => (
        <Task task={task} todoList={todoList} setTodoList={setTodoList} index={i} />
      ))}
      <Input todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
