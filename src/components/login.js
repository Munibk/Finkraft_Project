
/**
 * Login component for user authentication.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.onLogin - The callback function to be called when the user successfully logs in.
 */
import React, { useState } from 'react';
import '../login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Hardcoded credentials for demonstration purposes
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';

    // Check if the entered credentials match the hardcoded ones
    if (username === hardcodedUsername && password === hardcodedPassword) {

        onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} placeholder="enter username"onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
