import { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import AddTodoForm from './component/AddTodoForm';

function App() {

  const[tasks, setTasks] = useState([])

  const addTodo = (text) =>{
    const newTask = {id: Date.now(), text,  completed: false}
    setTasks([...tasks, newTask])
  }

  const editTodo = (id, newText, completed) =>{
    const updatedTaskList = tasks.map((task) =>{
      if(task.id === id){
        return {...task, text: newText, completed: completed}
      }
      return task
    })
    setTasks(updatedTaskList)
  }
  
  const deleteTodo = (id) =>{
    setTasks(tasks.filter((task) => (task.id !== id)))
  }
  
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList tasks={tasks} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
}

export default App;
