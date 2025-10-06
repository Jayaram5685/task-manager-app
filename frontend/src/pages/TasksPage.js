// frontend/src/pages/TasksPage.js
// This is the main task management component from our previous version
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiTrash2, FiEdit, FiCheck } from 'react-icons/fi';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const fetchTasks = () => {
    // Note: The token is now automatically added to requests by our setup in AuthContext
    axios.get('/api/tasks')
      .then(res => {
        const sortedTasks = res.data.sort((a, b) => a.completed - b.completed);
        setTasks(sortedTasks);
      })
      .catch(error => console.error("Error fetching tasks!", error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    axios.post('/api/tasks/add', { title: input })
      .then(() => {
        setInput('');
        fetchTasks();
      })
      .catch(error => console.error("Error adding task!", error));
  };

  const deleteTask = (id) => {
    axios.delete(`/api/tasks/${id}`)
      .then(() => fetchTasks())
      .catch(error => console.error("Error deleting task!", error));
  };

  const toggleComplete = (task) => {
    axios.post(`/api/tasks/update/${task._id}`, {
        title: task.title,
        completed: !task.completed
    })
      .then(() => fetchTasks())
      .catch(error => console.error("Error updating task!", error));
  };

  const handleEdit = (task) => {
    setIsEditing(task._id);
    setEditText(task.title);
  };

  const saveEdit = (id) => {
    if (editText.trim() === '') return;
    const taskToUpdate = tasks.find(task => task._id === id);
    axios.post(`/api/tasks/update/${id}`, {
        title: editText,
        completed: taskToUpdate.completed
    })
      .then(() => {
        setIsEditing(null);
        setEditText('');
        fetchTasks();
      })
      .catch(error => console.error("Error saving edit!", error));
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1>TaskFlow ✨</h1>
        <p>Stay organized, get things done.</p>
      </header>
      <form className="task-input-form" onSubmit={addTask}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
              <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task)}
                className="task-checkbox"
              />
              {isEditing === task._id ? (
                <form className="edit-form" onSubmit={(e) => { e.preventDefault(); saveEdit(task._id); }}>
                  <input 
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    autoFocus
                  />
                </form>
              ) : (
                <span className="task-title">{task.title}</span>
              )}
            </div>
            <div className="task-buttons">
              {isEditing === task._id ? (
                <button className="icon-btn save-btn" onClick={() => saveEdit(task._id)}><FiCheck /></button>
              ) : (
                <button className="icon-btn edit-btn" onClick={() => handleEdit(task)}><FiEdit /></button>
              )}
              <button className="icon-btn delete-btn" onClick={() => deleteTask(task._id)}><FiTrash2 /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;