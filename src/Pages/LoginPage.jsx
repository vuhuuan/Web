import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check the username and password here (customize for each case)
    if (username === 'customer' && password === 'customerpass') {
      navigate('/customer');
    } else if (username === 'staff' && password === 'staffpass') {
      navigate('/staff');
    } else if (username === 'leader' && password === 'leaderpass') {
      navigate('/leader');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
