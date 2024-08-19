import React from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers'
import WishItem from '../../components/WishItem/WishItem'

const Wishlist = () => {
  return (
    <div className='app__wishList'>
        <ScrolledText />
        <Navbar />
        <WishItem />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Wishlist