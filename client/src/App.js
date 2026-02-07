import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import Header from './components/Header';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = async (id, status) => {
    const res = await axios.put(`http://localhost:5000/todos/${id}`, {
      completed: !status,
    });

    setTodos(todos.map(todo =>
      todo._id === id ? res.data : todo
    ));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const handleEditChange = (id, field, value) => {
    setTodos(todos.map(todo =>
      todo._id === id ? { ...todo, [field]: value } : todo
    ));
  };

  const saveEdit = async (id, task, description) => {
    const res = await axios.put(`http://localhost:5000/todos/${id}`, {
      task,
      description,
    });

    setTodos(todos.map(todo =>
      todo._id === id ? res.data : todo
    ));
    setEditId(null);
  };

  return (
    <div className="container">
      <Header />
      <TodoForm onAdd={addTodo} />

      <ul className="todoList">
        {todos.slice().reverse().map(todo => (
          <li className="todo" key={todo._id}>

            {editId === todo._id ? (
              <div className="editBox">
                <input
                  type="text"
                  value={todo.task}
                  onChange={(e) =>
                    handleEditChange(todo._id, 'task', e.target.value)
                  }
                />

                <textarea
                  value={todo.description}
                  onChange={(e) =>
                    handleEditChange(todo._id, 'description', e.target.value)
                  }
                />

                <button
                  onClick={() =>
                    saveEdit(todo._id, todo.task, todo.description)
                  }
                >
                  Save
                </button>

                <button onClick={() => setEditId(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <div className="todoContent">
                  <h3 className={todo.completed ? 'done' : ''}>
                    {todo.task}
                  </h3>
                  <p>{todo.description}</p>
                </div>

                <div>
                  <button onClick={() => toggleComplete(todo._id, todo.completed)}>
                    {todo.completed ? 'Completed' : 'Pending'}
                  </button>

                  <button onClick={() => setEditId(todo._id)}>Edit ✏️</button>

                  <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </div>
              </>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
