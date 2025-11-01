import React, { useState } from 'react';

function ToDoItem({ task, toggleCompleted, deleteTask, editTask }) {
  // Local state to manage the editing mode
  const [isEditing, setIsEditing] = useState(false);
  // Local state to hold the text while editing
  const [editText, setEditText] = useState(task.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Call the editTask function from the parent (App.js)
    editTask(task.id, editText);
    setIsEditing(false); // Exit editing mode
  };
  
  const handleToggleEdit = () => {
      // Set the initial edit text to the current task text when entering edit mode
      if (!isEditing) {
          setEditText(task.text);
      }
      setIsEditing(!isEditing);
  };

  // Conditional Rendering: If isEditing is true, show the form; otherwise, show the task.
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      
      {isEditing ? (
        // EDIT MODE: Show an input field and a save button
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        // VIEW MODE: Show the task text and action buttons
        <>
          <span 
            className="task-text"
            onClick={() => toggleCompleted(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </span>
          
          <div className="actions">
            <button 
                className="edit-btn" 
                onClick={handleToggleEdit}
            >
                 Edit
            </button>
            <button 
              className="delete-btn" 
              onClick={() => deleteTask(task.id)}
            >
               Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
    
export default ToDoItem;