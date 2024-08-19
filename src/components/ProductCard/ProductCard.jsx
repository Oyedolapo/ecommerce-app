import React from 'react'
import { whiteSneakers } from '../../constants/images';

import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

import './ProductCard.css'
const ProductCard = ( { imgUrl, altText, name, price}) => {
  return (
    <div className='app__productCard'>
      <div className="app__productCard-img">
        <img src={imgUrl} alt={altText} />
        <div className="app__productCard_img-icons animate__animated animate__fadeInUp">
          <BsCart className='icon'/>
          <FaRegHeart className='icon'/>
          <IoEyeOutline className='icon'/>
        </div>
        <div className="state-btn">New</div>
      </div>
      <div className="app__productCard-info">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductCard