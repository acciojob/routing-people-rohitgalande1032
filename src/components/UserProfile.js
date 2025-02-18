import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = ({list}) => {
    let {id} = useParams();
    console.log(id)
    const user = list.find(user => user.id === parseInt(id));
  return (
    <div>
        <h1>User Details</h1>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
    </div>
  )
}

export default UserProfile