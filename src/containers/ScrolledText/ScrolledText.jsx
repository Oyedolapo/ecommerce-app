import React from 'react';

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import './ScrolledText.css';
import { Link } from 'react-router-dom';

const ScrolledText = () => {
  return (
    <div className='scroll-container d-flex justify-content-center align-items-center'>
      <p className='scroll-text fw-bold text-capitalize'>Get 5% off first purchase <Link to='/male-wears'><span className='text-danger'><MdKeyboardDoubleArrowRight /> Shop Now</span></Link></p>
    </div>
  )
}

export default ScrolledText