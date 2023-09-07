import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    try {
      const response = await axios.post(
        "https://todo-backend-6vck.onrender.com",
        JSON.stringify({
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          username: formState.username,
          password: formState.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoggedIn(true);
      navigate('/home');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError("Failed to create user");
      }
    }
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
    </div>
  );
};

export default SignUpPage;
