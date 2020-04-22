import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className='navbar'>
      <Link to='/login'><h2>Auth-Friends</h2></Link>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>  
            <Link to='/protected'>Friends</Link>
          </li> 
          <li>  
            <Link to='/signup'>Add New Friend</Link>
          </li>
        </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} />          <PrivateRoute exact path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
