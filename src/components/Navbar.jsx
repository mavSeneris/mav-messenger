import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>  
      <span className='navbar-logo'>Mav Messenger</span> 
      <div className='user'>
        <img className='user-nav-avatar' src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'/>
        <span className='user-name'>Eliud Seneris</span>
        <button className='user-logout-btn'>Logout</button>
      </div>
    </div>
  )
}
