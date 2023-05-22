import '../App.css';
import React, { useState, useEffect } from "react";
import Navbar from './NavBar';
import axios from 'axios';

// Component
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch all todos from the API
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/alltodos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Add a new task to the API and update the local state
  const addTodo = async (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      const todo = {
        task: newTodo,
        date_added: newDate,
      };
      try {
        const response = await axios.post('http://localhost:5001/api/newtask', todo);
        const insertedTask = response.data.insertedTask;
        setTodos([...todos, insertedTask]);
        setNewTodo("");
        setNewDate("");
      } catch (error) {
        console.error('Error adding new task:', error);
      }
    }
  };

  // Delete a task from the API and update the local state
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/delete/${id}`);
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Update a task in the API and update the local state
  const editTodo = async (id, newTask, newDateAdded) => {
    const updatedTodo = {
      task: newTask,
      date_added: newDateAdded,
    };
    try {
      await axios.put(`http://localhost:5001/api/update/${id}`, updatedTodo);
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, task: newTask, date_added: newDateAdded };
        }
        return todo;
      });
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Toggle the done status of a task
  const toggleDone = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='TodoWrapper'>
    <Navbar />
    <h1>Todo List</h1>
    <form className="TodoForm" onSubmit={addTodo}>
      <input
        className="todo-input"
        type="text"
        name="title"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      &nbsp;
      <input
        type="date"
        name="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
      />
      <button className='todo-btn'
        type="submit"
      >
        Add
      </button>
    </form>
    <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className='Todo'>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(todo.id)}
            />
            <span style={{ textDecoration: todo.done ? "line-through" : "" }}>
              {todo.task}
            </span>
            <span>{todo.date_added}</span>
            <div className="buttons-container">
              <button
                className='todo-delete'
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
              <button
                className='todo-edit'
                onClick={() => {
                  const newTask = prompt("Enter new task:", todo.task);
                  const newDateAdded = prompt("Enter new date added:", todo.date_added);
                  if (newTask !== null) {
                    editTodo(todo.id, newTask, newDateAdded);
                  }
                }}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
