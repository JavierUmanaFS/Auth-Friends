import React, { useState, useEffect } from 'react';
import '../App.css';

//import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import Spinner from '../utils/Spinner';


const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  
const [isLoading, setLoading] = useState(false)

  const getFriends = () => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
      
      setFriends(res.data)
      setLoading(false);
    })
  }

  useEffect(() => {
    setLoading(true);
    getFriends();
  }, [])

  console.log(friends)
  console.log(isLoading)
  if(isLoading){
    return <Spinner/>
  } else {
    return(
    <div>
      <h1>Friends</h1>
      {friends.map(friend => {
        return(
          <div className='friends' key={friend.id}>
            <h2>{friend.name}</h2>
            <h3>{friend.age}</h3> 
            <h3>{friend.email}</h3>
          </div>
        )
      })}
    </div>
  )
  }
}

export default FriendsList;