import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className='page'>
<Routes>
<Route path='/login' element={<Login/>} />
<Route path='/signup' element={<SignUp/>} />
<Route path='/' element={<Navigate to='/signup'/>} />
</Routes>

 
    </div>
  );
}

export default App;
