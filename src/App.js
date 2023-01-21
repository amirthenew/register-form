import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className='page'>
<Switch>
<Route path='/login' component={Login} />
<Route path='/signup' component={SignUp} />
<Redirect from='/' to='signup'/>
</Switch>

 
    </div>
  );
}

export default App;
