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

    this.setState({
      isloading: true
    })

    axiosWithAuth()
    .post('/api/login', this.state.credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', JSON.stringify(res.data.payload));
      this.props.history.push('/protected');
    })
    .catch(err => console.log(err.response));

    this.setState({
      isLoading: false
    })
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