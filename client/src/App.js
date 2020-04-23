import React from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import Users from './components/Users';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/login'>
          Log In
        </NavLink>
        <NavLink to='/signup'>
          Sign Up
        </NavLink>
      </div>
      <Route exact path='/' component={Home}/>
      <Route  path='/login'>
      <Login/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/users'>
        <Users/>
      </Route>
    </div>
  );
}

export default App;
