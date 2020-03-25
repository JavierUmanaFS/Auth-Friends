import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends Component {
  state = { 
    credentials: {
      username:'',
      password:''
    },
    isLoading: false

  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name] : e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log('1',this.isLoading)
    this.setState({
      isloading: true
    })
    console.log('2',this.isLoading)
    axiosWithAuth()
    .post('/api/login', this.state.credentials)
    .then(res => {
     console.log('Looking for this',res);
      localStorage.setItem('token', JSON.stringify(res.data.payload));
      this.props.history.push('/protected');
    })
    .catch(err => console.log(err.response) );

    this.setState({
      isLoading: false
    })
     console.log('3',this.isLoading)
  };

  render() {
   
    return (
      <div>
        <form onSubmit={this.login}>
          <input
          type="text"
          name='username'
          value={this.state.credentials.username}
          onChange={this.handleChange}
          />
          <input 
          type="password"
          name='password'
          value={this.state.credentials.password}
          onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;