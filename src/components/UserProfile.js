import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = ({list, loading}) => {
    let {id} = useParams();
    console.log(id)
    const user = list.find(user => user.id === parseInt(id));
  return (
    <div>
        {loading ? (
        <div>
            <p>Loading...</p>
        </div>
      ) : (
        <div>
        <h1>User Details</h1>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        </div>
        )}
    </div>
  )
}

export default UserProfile