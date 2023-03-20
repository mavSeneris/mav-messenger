import React from 'react'

export default function Login() {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='form-logo'>MAV</span>
        <span className='form-title'>Login</span>
        <form>
          <input type={'text'} placeholder='username' />
          <input type={'password'} placeholder='password' />
          <button className='login-btn'>Sign In</button>
        </form>
        <span className='reg-link'>Don't have an account? Sign up</span>
      </div>
    </div>
  )
}
