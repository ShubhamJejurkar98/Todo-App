import React from 'react'

import TodoItem from './TodoItem'

function TodoList({ tasks , deleteTodo, editTodo}) {
  return (
    <div className='TodoList'>
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} deleteTodo={deleteTodo} editTodo={editTodo}/>
        ))}
        
      </ul>
    </div>
  )
}

export default TodoList