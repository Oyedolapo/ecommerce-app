import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='app__register'>
        <input type="email" name="register" id="register" placeholder='Email address'/>
        <p>A link to set a new password will be sent to your email address.</p>
        <button className='register-btn'>Register</button>
    </div>
  )
}

export default Register