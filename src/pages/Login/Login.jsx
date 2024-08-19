import React, { useState } from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers'
import SubNav from '../../components/SubNav/SubNav'
import LoginAction from '../../components/LoginAction/LoginAction'
import Register from '../../components/Register/Register'
import './Login.css';

const Login = () => {
    const [action, setAction] = useState('login')
  return (
    <div>
        <ScrolledText />
        <Navbar />
        <SubNav />
        <div className="app__login">
            <div className="app__login-heading">
                <h3 onClick={() => setAction('login')}>Login</h3>
                <h3 onClick={() => setAction('register')}>Register</h3>
            </div>
            {action === 'login' ? <LoginAction /> : <Register />}
        </div>
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Login