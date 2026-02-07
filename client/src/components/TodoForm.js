import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = async () => {
    if (!task) return;

    try {
      const response = await axios.post('http://localhost:5000/todos', {
        task,
        description,
        completed: false,
      });

      onAdd(response.data);
      setTask('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="todoForm">
      <input
        type="text"
        placeholder="Task title"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};

export default TodoForm;
