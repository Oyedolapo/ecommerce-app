import React from 'react'
import { useStore } from '../../Context/StoreContext';
import './CartItem.css'
import { Link } from 'react-router-dom';
import SubNav from '../SubNav/SubNav';

const CartItem = () => {
  const {state, dispatch} = useStore();
  return (
    <div className='app__cartItems'>
      <SubNav />
      {state.cart.length === 0 ? (
        <p className='empty-text'>Your cart is empty!</p>
      ) : (
        <div className='cart__items'>
          {state.cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.imgUrl} alt={item.altText} />
                <div className='cart__items-details'>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <div className='cart__item-details-btn'>
                    <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>
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

export default CartItem