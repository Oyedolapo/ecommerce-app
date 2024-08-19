import React from 'react';
import { Link } from 'react-router-dom';
import './SubNav.css';

const SubNav = () => {
  return (
    <div className="app__wishItems-nav">
        <Link to='/cart'><p>Shopping Cart</p></Link>
        <Link to='/wish-list'><p>Wishlist</p></Link>
        <Link to='/tracking'><p>Order Tracking</p></Link>
        <Link to='/login'><p>Login</p></Link>
    </div>
  )
}

export default SubNav