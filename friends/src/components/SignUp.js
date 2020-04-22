import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import '../App.css';


const SignUp = () => {

  const [newUser, setNewUser ] = useState({
    id: new Date(),
    name:'',
    age: '',
    email:''
  });

  const handleChange = e => {
    e.persist();
    let value = e.target.value;
    if(e.target.name === 'age') {
      value = parseInt(value);
    }

    setNewUser({
      ...newUser,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
    .post('/api/friends', newUser)
    .then(res => console.log(res))
    .catch(err => console.log({err}))

    setNewUser({
      name:'',
      age:'',
      email:''
    })
  }

  return(
    <div>
      <h1>Sign Up Form</h1>
      <form className='form' onSubmit={handleSubmit}>
      <label className='form_input2' htmlFor="name">Username:{' '}
          <input 
          id='name'
          type="text" 
          name='name'
          value={newUser.name}
          onChange={handleChange}
          />
          </label>
       <label className='form_input2' htmlFor="age">Age:{' '}
          <input 
          id='age'
          type="number" 
          name='age'
          value={newUser.age}
          onChange={handleChange}
          />
          </label>
       <label className='form_input2' htmlFor="email">Email:{' '}
          <input 
          id='email'
          type="email" 
          name='email'
          value={newUser.email}
          onChange={handleChange}
          />
          </label>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUp;