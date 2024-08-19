import React from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers'
import SubNav from '../../components/SubNav/SubNav';
import './Tracking.css'

const Tracking = () => {
  return (
    <div className='app__tracking'>
        <ScrolledText />
        <Navbar />
        <SubNav />
        <div className="app__tracking-content">
            <h2>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</h2>
            <form action="" className="app__tracking-form">
                <div className="app__tracking-input">
                    <label htmlFor="order-id">Order ID:</label>
                    <input type="text" placeholder="Order ID" id="order-id"/>
                </div>

                <div className="app__tracking-input">
                    <label htmlFor="billing">Billing email:</label>
                    <input type="email" placeholder="Billing email" id="billing"/>
                </div>

                <button className='track-btn'>Track</button>
            </form>
        </div>
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Tracking