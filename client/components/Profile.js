import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Profile = ({ user }) => {

  // useEffect(() => {
  //   axios.get('/user/:id')
  //   .then(res => {res.json()})
  //   .then(data => {
  //     setName(data);
  //     console.log('data:', data);
  //   })
  //   .catch(err => console.error(err))
  // });

  return (
    <h1>Welcome, {user.firstName} {user.lastName}</h1>
  )
}
export default Profile;