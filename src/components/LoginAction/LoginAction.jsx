import React, { useState } from 'react';
import './LoginAction.css';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const LoginAction = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prevState => !prevState)
    }
  return (
    <div className="app__login-form">
        <input type="text" name="login" id="login" placeholder='Username or email address' required/><br />
        <div className="password-input">
            <input type={showPassword ? 'text' : 'password'} name="login-password" id="login-password" placeholder='Password'required/>
            {showPassword ? <FaEye onClick={togglePassword} className='password-icon'/> : <FaEyeSlash onClick={togglePassword} className='password-icon'/> }
        </div>
        <div className="checkbox-input">
            <input type="checkbox" name="login-check" id="login-check" />
            <label htmlFor="">Remember me</label>
        </div>
        <button className='login-btn'>LOG IN</button>
        <h4>Lost your password?</h4>
    </div>
  )
}

export default LoginAction