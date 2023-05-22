import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage = ({ setIsLoggedIn }) => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSignup = async () => {
   
    
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input type="text" name="firstName" value={formState.firstName} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" name="lastName" value={formState.lastName} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="text" name="email" value={formState.email} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={formState.username} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={formState.password} onChange={handleInputChange} />
          </label>
        </div>
        <button title="Signup">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
      <div className="signup-link">
          Already have an account? <Link to="/ToDoList">Login</Link>
        </div>
    </div>
  );
};

export default SignUpPage;
