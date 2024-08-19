import React from 'react';

import { LuCopyright } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='app__footer'>
      <div className="app__footer-info">
        <p>Copyright <LuCopyright /> {currentYear}. EC Luxury </p>
        <p>Exchange & Return Policy</p>
        <p>Privacy Policy</p>
      </div>
      <div className="app__footer-brand">
        <FaInstagram fontSize={20}/>
      </div>
    </div>
  )
}

export default Footer