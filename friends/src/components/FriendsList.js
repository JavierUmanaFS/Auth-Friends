import React, { Component } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

class FriendsList extends Component {
  state = {
   newFriend: {
    id: new Date(),
    name: '',
    age: null,
    email: ''
   },

   friendsList: []
  };

  handleChange = e => {
     this.setState({
       newFriend : {
         ...this.state.newFriend,
      [e.target.name] : e.target.value
       }
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
    .post('http://localhost:5000/api/friends', this.state.newFriend)
    .then(res => {
      this.setState({
        friendsList : res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  
  render() {
    console.log(this.state.friendsList)
    return (
      <div>
      <h1>Welcome User</h1>
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text" 
          name='name'
          value={this.name}
          onChange={this.handleChange}
          />
          <input 
          type="number" 
          name='age'
          value={this.age}
          onChange={this.handleChange}
          />
          <input 
          type="email" 
          name='email'
          value={this.email}
          onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
      <div>
      <h1>FriendsList</h1>
      <div>
        {this.state.friendsList.map((friend, index) => {
        return <h2 key={index}>{friend.name}</h2>
      })} 
      </div>
     
      </div>
      </div>
    )
  }
}


export default FriendsList; 