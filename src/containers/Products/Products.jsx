import React from 'react';

import './Products.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import { brownWatch, fragrance, heels, sunglasses, watch, whiteSneakers } from '../../constants/images';

const Products = () => {
  return (
    <div className='app__products'>
      <div className="app__products-heading">
        <h2>Featured Products</h2>
        <p><a href="#">See All Products</a></p>
      </div>

      <div className="app__products-container">
        <ProductCard imgUrl={whiteSneakers} altText="white sneakers" name="White Sneakers" price="#150,000"/>
        <ProductCard imgUrl={watch} altText="wristwatch" name="Wristwatch" price="#250,000"/>
        <ProductCard imgUrl={heels} altText="heels" name="Heels" price="#50,000"/>
        <ProductCard imgUrl={fragrance} altText="fragrance" name="Fragrance" price="#160,000"/>
        <ProductCard imgUrl={brownWatch} altText="brown watch" name="Brown Watch" price="#260,000"/>
        <ProductCard imgUrl={sunglasses} altText="sunglasses" name="Sunglasses" price="#60,000"/>
        </div>
    </div>
  )
}

export default Products