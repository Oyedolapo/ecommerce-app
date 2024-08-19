import React from 'react';
import './Banner.css';

import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Banner = ({ title}) => {
  return (
    <div className='app__banner'>
      <div className="app__banner-text">
        <h1>{title}</h1>
        <p><Link to='/'>Home</Link> <FaAngleRight /> <span className="active">{title}</span></p>
      </div>
    </div>
  )
}

export default Banner