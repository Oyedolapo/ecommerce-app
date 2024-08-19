import React from 'react';
import './MarketPlace.css'
import { Link } from 'react-router-dom';

const MarketPlace = () => {
  return (
    <div className='app__marketPlace'>
        <div className="app__marketPlace-text">
            <h2>Casual Feet</h2>
            <h1>LUXURY</h1>
            <div className="app__marketPlace-btn">
              <Link to='/fragrance'><button>Shop Now</button></Link>
            </div>
        </div>
    </div>
  )
}

export default MarketPlace