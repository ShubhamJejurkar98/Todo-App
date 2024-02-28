import React, { useState } from 'react'

function AddTodoForm({ addTodo }) {

  const[text, setText] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
      
    }else{
      alert('Please enter a task!')
    }
  }

  return (
    <form>
      <input 
      type='text'
      placeholder='Add Todo...'
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <button type='submit' onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default AddTodoForm