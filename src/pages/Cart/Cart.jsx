import React from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers';
import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
   
  return (
    <div className='app__cart'>
        <ScrolledText />
        <Navbar />
        <CartItem />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Cart