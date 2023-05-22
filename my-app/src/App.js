import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './comp/TodoList';
import LoginPage from './comp/LoginPage';
import SignUpPage from './comp/SignUpPage';
import LogoutPage from './comp/LogoutPage';

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
