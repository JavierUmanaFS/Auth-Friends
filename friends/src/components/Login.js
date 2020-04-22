import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import '../App.css';


const Login = () => {

const [credentials, setCredentials] = useState({
  username:'',
  password:''
})


const history = useHistory();

const handleChange = e => {
  setCredentials({
    ...credentials,
    [e.target.name]: e.target.value
  })
}

const login = e => {
  e.preventDefault();

  axiosWithAuth()
  .post('/api/login', credentials)
  .then(res => {
    localStorage.setItem('token', JSON.stringify(res.data.payload));
    history.push('/protected');
  })
  .catch(err => console.log({err}))

}


return(
  <div>
  <h1>Login</h1>
    <form className='form' onSubmit={login}>
    <label className='form_input' htmlFor="username">Username:{' '}
      <input 
      id='username'
      type="text" 
      name='username' 
      value={credentials.username} 
      onChange={handleChange}
      />
      </label>
    <label className='form_input' htmlFor="username">Password:{' '}
      <input 
      id='password'
      type="password" 
      name='password' 
      value={credentials.password} 
      onChange={handleChange}
      />
      </label>
      <button>Log In</button>
    </form>
  </div>
)
}

export default Login;