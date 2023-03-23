import { signOut } from 'firebase/auth'
import React, {useContext} from 'react'
import { auth } from '../firebase'
import {AuthContext} from '../context/AuthContext'



export default function Navbar() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='navbar-logo'>Mav Messenger</span>
      <div className='user'>
        <img className='user-nav-avatar' src={currentUser.photoURL} />
        <span className='user-name'>{currentUser.displayName}</span>
        {/* <button className='user-logout-btn'>Logout</button> */}
        <div onClick={() => signOut(auth)}>
          <svg className='logout-icon' stroke="currentColor" fill="#ffffff" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M13 16L18 12 13 8 13 11 4 11 4 13 13 13z"></path><path d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z"></path></svg>
        </div>
      </div>
    </div>
  )
}
