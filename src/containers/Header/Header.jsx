import React from 'react'
import { bgOne, denim, fragrance, shoes, watch } from '../../constants/images';

import './Header.css'

const Header = () => {
  return (
    <div className='app__header'>
        <div id='demo' className='carousel slide' data-bs-ride='carousel'>
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-content">
                        <img src={denim} alt="Denim" className="d-block" style={{width: '100%'}}/>
                        <div className="carousel-caption">
                            <h3>Denim</h3>
                            <p>Shop Now</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-content">
                        <img src={fragrance} alt="Fragrance" className="d-block" style={{width: '100%'}} />
                        <div className="carousel-caption">
                            <h3>Fragrance</h3>
                            <p>Shop Now</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                   <div className="carousel-content">
                        <img src={bgOne} alt="Men Wears" className="d-block" style={{width: '100%'}}/>
                        <div className="carousel-caption">
                            <h3>Men Wears</h3>
                            <p>Shop Now</p>
                        </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="carousel-content">
                        <img src={shoes} alt="Shoes" className="d-block" style={{width: '100%'}}/>
                        <div className="carousel-caption">
                            <h3>Shoes</h3>
                            <p>Shop Now</p>
                        </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="carousel-content">
                        <img src={watch} alt="Accessories" className="d-block" style={{width: '100%'}}/>
                        <div className="carousel-caption">
                            <h3>Accessories</h3>
                            <p>Shop Now</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header