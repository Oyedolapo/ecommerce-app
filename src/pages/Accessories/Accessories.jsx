import React from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers'
import Banner from '../../components/Banner/Banner'

import './Accessories.css'
import SortList from '../../components/SortList/SortList'
import { data } from '../../constants'

const Accessories = () => {
  return (
    <div className='app__accessory'>
      <ScrolledText />
      <Navbar />
      <Banner title="Accessories"/>
      <SortList name={data.accessory} category="accessories"/>
      <AboutUs />
      <Footer />
    </div>
  )
}

export default Accessories