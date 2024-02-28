import React, { useState } from 'react';

function TodoItem({ task, deleteTodo, editTodo }) {

  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleDelete = () => {
    deleteTodo(task.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editTodo(task.id, editedText);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedText(task.text);
    setEditing(false);
  };

  const handleCheckbox = () => {
    editTodo(task.id, editedText, !task.completed);
  };

  return (
    <div className='TodoItem'>
    
      {!editing ? (
        <>
          <input type="checkbox" checked={task.completed} onChange={handleCheckbox} />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          {!task.completed && <button onClick={handleEdit}>Edit</button>}
          <button className='deleteButton' onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <>
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      )}
    
    </div>
  );
}

export default TodoItem;
