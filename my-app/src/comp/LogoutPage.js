import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here if necessary

    // Redirect to login page
    navigate('/TodoList');
  }, []);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default LogoutPage;
