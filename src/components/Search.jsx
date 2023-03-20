import React from 'react'

export default function Search() {
  const err = false
  const user = false

  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Find user...' />
      </div>
      {err && <div className='search-error'>User not found! :'(</div>}
      {user && <div className='user-chat'>
        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' />
        <span className='user-chat-info'>Ily Seneris</span>
      </div>}
    </div>
  )
}
