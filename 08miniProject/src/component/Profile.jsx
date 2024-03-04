import React from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const {user} = userContext(UserContext)

  if(!user) return <div>please login</div>
  return <div>Welcome {user.username}</div>
}

export default Profile