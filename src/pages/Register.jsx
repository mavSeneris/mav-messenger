import React from 'react'

export default function Register() {


  function handdleSubmit(e){
    e.preventDefault()
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0]

    console.log(file)
  }

  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='form-logo'>MAV</span>
        <span className='form-title'>Register</span>
        <form onSubmit={handdleSubmit}>
          <input type={'text'} placeholder='username' />
          <input type={'email'} placeholder='email' />
          <input type={'password'} placeholder='password' />
          <input style={{ display: "none" }} type={'file'} id='file' />
          <label className='avatar-label' htmlFor='file'>
            <svg stroke="#36c377" fill="#36c377" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" stroke="#000" strokeWidth="2" d="M1,1 L19,1 L19,19 L1,19 L1,1 Z M5,19 L5,23 L23,23 L23,5.97061363 L18.9998921,5.97061363 M6,8 C6.55228475,8 7,7.55228475 7,7 C7,6.44771525 6.55228475,6 6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 Z M2,18 L7,12 L10,15 L14,10 L19,16"></path>
            </svg>

            <span className='file-text'>add an avatar</span>
          </label>
          <button className='signIn-btn'>Sign Up</button>
        </form>
        <span className='login-link'>You have an account? Login</span>
      </div>
    </div>
  )
}
