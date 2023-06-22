import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { Mycontext } from '../App';


export default function Login() {
  const data = useContext(Mycontext);
  const { state } = data;
    console.log(state);

  return (
    <div>
      <h2>Login Page</h2>
      <input type='text' name='email' ></input>
      <input type='text' name='password' ></input>
      <button>Login</button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  )
}

