import React from 'react';
import './LuxuryCard.css';

import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const LuxuryCard = ( { category, imgUrl, altText, name, price, width, height } ) => {
  return (
    <div className="app__luxury-container_img">
     <Link to={`/${category}/${name}`}>
        <div className="app__luxury-container_img-details">
          <img src={imgUrl} alt={altText} width={width} height={height} onClick={window.scrollTo(0,0)}/>
          <div className="app__luxury-container_img-icons animate__animated animate__fadeInUp">
            <BsCart className='luxury-icon'/>
            <FaRegHeart className='luxury-icon'/>
            <IoEyeOutline className='luxury-icon'/>
          </div>
        </div>
        <div className="app__luxury-container_text">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
     </Link>
    </div>
  )
}

export default LuxuryCard