import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Friends W Auth</h1>
      <nav>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList}/> 
          <Route path='/login' component={Login} />
          <Route component={Login}/>
        </Switch>
      </nav>
    </div>
    </Router>
  );
}

export default App;
