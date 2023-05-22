// import React, { useState } from 'react';
// import { Input, Button } from 'antd';
// // import 'antd/dist/antd.css';
// // import './LoginPage.css';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
    
//       if (username && password) {
//         // User is an admin
//         // Set the appropriate state values
//         setIsLoggedIn(true);
//         navigate('/todo'); // Redirect to the profile page for admin
     
//     } else {
//       console.log(error);
//       setError("Invalid username or password");
//     }
//   };

//   const handleSignUp = () => {
//     // Handle sign up logic
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleLogin();
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2 className="login-title">Login</h2>
//         {isLoggedIn ? (
//           <p>You are logged in.</p>
//         ) : (
//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username" className="form-label">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 className="form-input"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="form-input"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="login-button">Login</button>
//           </form>
//         )}
//         {error && <p className="error-message">{error}</p>}
//         <div className="signup-link">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import TodoList from './TodoList';
import SignUpPage from './SignUpPage';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };


  if (isLoggedIn) {
    return <TodoList />;
  }

  return (
    <div className="login-page">
      <h1 className="title">Welcome</h1>
      <div className="input-container">
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="primary" className="login-button" onClick={handleLogin}>
        Login
      </Button>
      <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
    </div>
  );
};

export default LoginPage;