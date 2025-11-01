
// import Header from "./components/Header";
import React from 'react';
import { useState } from 'react';
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";



function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Welcome to your To Do List', completed: false },
    { id: 2, text: 'Skip breakfast', completed: true },
    { id: 3, text: 'Exercise for 30 minutes', completed: false },
  ]);

  // --- Task Management Functions ---

  // 1. Add Task
  const addTask = (text) => {
    if (text.trim() === "") return;
    const newTask = {
      id: Date.now(), // Use current timestamp as a simple unique ID
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // 2. Toggle Completion Status
const toggleCompleted = (id) => {
setTasks(
  tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  )
);
};

  // 4. Edit Task
const editTask = (id, newText) => {
  // Prevent empty edits
  if (newText.trim() === "") return;
  
  setTasks(
    tasks.map(task => 
      // Find the task by ID and update its text
      task.id === id ? { ...task, text: newText } : task
    )
  );
};

// 3. Delete Task
const deleteTask = (id) => {
setTasks(tasks.filter(task => task.id !== id));
};



  return (
    <div className="todo-app">
      <h1>Simple To-Do List</h1>
      
      {/* TodoForm for adding new tasks */}
      <ToDoList addTask={addTask} />

      <div className="todo-list">
        {/* Map over the tasks state to render TodoItem for each task */}
        {tasks.map(task => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleCompleted={toggleCompleted}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
export default App;