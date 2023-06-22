import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'
export const Mycontext = createContext()


function App() {
  const [state,setState]=useState([])
  return (
    <BrowserRouter> 

     <div>
      <Link to="/"><span>Home</span></Link>
      <Link to="login/"><span>Login</span></Link>
      <Link to="register/"><span>Register</span></Link>
    </div>
       <Mycontext.Provider value={{state,setState}}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/Register'element={<Register/>}/>
     </Routes>
    </Mycontext.Provider>
    </BrowserRouter>

  );
}

export default App;
