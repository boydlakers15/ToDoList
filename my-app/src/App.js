import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogoutPage from './comp/LogoutPage';
import SignUpPage from './comp/SignUpPage';
import React from 'react';
import LoginPage from './comp/LoginPage';
import TodoList from './comp/TodoList';

function App() {
  
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