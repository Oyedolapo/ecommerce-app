import React from 'react';
import { useStore } from '../../Context/StoreContext';
import './WishItem.css'
import { Link } from 'react-router-dom';
import SubNav from '../SubNav/SubNav';

const WishItem = () => {
  const {state, dispatch} = useStore();
  return (
    <div className='app__wishItems'>
      <SubNav />
      {state.wishlist.length === 0 ? (
        <p className='empty-text'>Your wishlist is empty!</p>
      ) : (
      <div className='wish__items'>
        {state.wishlist.map((item, index) => (
          <div key={index} className="wish-item">
          <img src={item.imgUrl} alt={item.altText} />
          <div className='wish__items-details'>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <h4>IN STOCK</h4>
            <div className='wish__item-details-btn'>
              <button onClick={() => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item })}>
                Remove
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
      )}
    </div>
  )
}

export default WishItem