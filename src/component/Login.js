import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mycontext } from '../App';

export default function Login() {
  const { state } = useContext(Mycontext); // Use the context object Mycontext
  const [loginData, setLoginData] = useState({});

  const handleLogin = () => {
    const foundUser = state.find(
      (user) =>
        user.username === loginData.username && user.password === loginData.password
    );

    if (foundUser) {
      alert('Login successful');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" name="username" onChange={handleInputChange} />
      <input type="password" name="password" onChange={handleInputChange} />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
