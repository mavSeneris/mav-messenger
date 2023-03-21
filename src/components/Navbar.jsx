import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>  
      <span className='navbar-logo'>Mav Messenger</span> 
      <div className='user'>
        <img className='user-nav-avatar' src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'/>
        <span className='user-name'>Eliud Seneris</span>
        {/* <button className='user-logout-btn'>Logout</button> */}
        <svg className='logout-icon' stroke="currentColor" fill="#ffffff" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M13 16L18 12 13 8 13 11 4 11 4 13 13 13z"></path><path d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z"></path></svg>
      </div>
    </div>
  )
}
