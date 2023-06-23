import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mycontext } from "../App";

function Register() {
  const { state, setState } = useContext(Mycontext);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();


  const handleRegister = () => {
    const foundUser = state.find((user) => user.username === formData.username);
    if (foundUser) {
      alert("Username is already taken. Please choose a different username.");
    } else if (formData.password === formData.confirmPassword) {
      setState((prevState) => [...state, formData]);
      navigate("/login");
    } else {
      alert("Passwords do not match.");
    }
  };
  

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <input type="text"placeholder="username"  name="username"value={state.username} onChange={handleInputChange}/>
        <input type="text"placeholder="email" name="email" value={state.email}onChange={handleInputChange}/>
        <input type="password"placeholder="password"name="password"value={state.password}onChange={handleInputChange}/>
        <input type="password"placeholder="confirm password"name="confirmPassword"value={state.confirmPassword}onChange={handleInputChange}/>
      </form>
      <button onClick={handleRegister}>Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
