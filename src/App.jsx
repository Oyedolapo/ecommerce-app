import React from 'react'
import { AboutUs, Footer, Gallery, Header, Luxury, MarketPlace, Navbar, Products, ScrolledText } from './containers'
import './App.css'
import { data } from './constants'

const App = () => {
  return (
    <div>
      <ScrolledText />
      <Navbar />
      <Header />
      <Gallery />
      <Luxury name={data.homeItems} category='home'/>
      <MarketPlace />
      <Products />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App