import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogoutPage from './comp/LogoutPage';
import SignUpPage from './comp/SignUpPage';
import React from 'react';
import LoginPage from './comp/LoginPage';
import TodoList from './comp/TodoList';
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    // Fetch todos from the server
    fetchTodos();
  }, []);
  
  const fetchTodos = async () => {
      try {
      const response = await axios.get("http://localhost:5001/api/alltodos");
      console.log("db:", response.data)
      setTodos(response.data);
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
};

console.log("todos:", todos)
  
  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/ToDoList" element={<LoginPage />} />
      <Route path="/todo" element={<TodoList />} />
    </Routes>
  </Router>
  );
}

export default App;