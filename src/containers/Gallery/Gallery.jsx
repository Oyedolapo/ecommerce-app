import React from 'react';
import './Gallery.css';
import { accessory, bgOne, fragrance, jeans, model, sneakers } from '../../constants/images';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className='app__gallery gap-2'>
        <div className='app__gallery-img d-lg-flex flex-column gap-4'>
            <div className="sneakers-img">
                <img src={sneakers} alt="sneakers" style={{ width: '350px', height: '300px'}}/>
                <div className="sneakers-box"><Link to='/shoes'>Sneakers</Link></div>
            </div>
            <div className="sneakers-img">
                <img src={bgOne} alt="t shirt" style={{ width: '350px', height: '350px'}}/>
                <div className="sneakers-box"><Link to='/male-wears'>T-shirt</Link></div>
            </div>
        </div>

        <div className="app__gallery-img d-lg-flex">
            <div className="model-img">
                <img src={model} alt="model"/>
                <div className="model-box"><Link to='/female-wears'>Luxury Collection</Link></div>
            </div>
        </div>

        <div className="app__gallery-img d-lg-flex flex-column gap-4">
            <div className="sneakers-img">
                <img src={fragrance} alt="fragrance" style={{ width: '350px', height: '350px'}}/>
                <div className="sneakers-box"><Link to='/fragrance'>Fragrance</Link></div>
            </div>
            <div className="sneakers-img">
                <img src={accessory} alt="accessory" style={{ width: '350px', height: '300px'}}/>
                <div className="sneakers-box"><Link to='/accessories'>Accessory</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Gallery