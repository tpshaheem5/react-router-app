import React, { useContext, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { Mycontext } from '../App';

function Register() {
  const { state, setState } = useContext(Mycontext);
//   const [formData, setFormData] = useState({});
  const navigate = useNavigate();

//   const handleRegister = () => {
//     // Perform registration logic here
//     // ...
//     setState((prevState) => ([
//         ...state,
//         formData
//     ]));
//     navigate('/login');
//   };

//   const handleInputChange = (e) => {
    // const { name, value } = e.target;
    //     setFormData((prevState) => ({
        //       ...prevState,
        //       [name]: value,
        //     }));
        //   };
        const handleRegister=(e)=>{
    const { name, value } = e.target;
    setState([...state,{[name]:value}])
    navigate('/login')
console.warn(state);
}

  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="username" name="username" value={state.username} />
        <input type="text" placeholder="email" name="email" value={state.email} />
        <input type="password" placeholder="password" name="password" value={state.password} />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={state.confirmPassword}
        />
      </form>
      <button onClick={handleRegister}>Register</button>
      <p >
        Already have an account? 
      </p>
    </div>
  );
}

export default Register;
