
/**
 * Main component of the application.
 * Renders the login component if the user is not logged in,
 * otherwise renders the dashboard component.
 */
import React, { useState } from 'react';
import Login from './components/login';
import './App.css';
import Dashboard from './components/dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * Handles the login action.
   * Sets the isLoggedIn state to true.
   */
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  /**
   * Handles the logout action.
   * Sets the isLoggedIn state to false.
   */
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <div>
          <Dashboard />
        </div>
       ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
