import React from 'react'

export default function Message() {
  return (
    <div className='message owner'>
      <div className='message-info'>
        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'/>
        <span>Just now</span>
      </div>
      <div className='message-content'>
        <p>All I know is Roblox!</p>
        {/* <img src='https://s.yimg.com/ny/api/res/1.2/vESuGu0Ia7uVC4Ua356klw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-01/60559560-7ed8-11ec-bffb-71ef534a2323'/> */}
      </div>
    </div>
  )
}
