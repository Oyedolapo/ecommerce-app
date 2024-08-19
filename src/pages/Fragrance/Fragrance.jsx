import React from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers'
import Banner from '../../components/Banner/Banner'
import SortList from '../../components/SortList/SortList'
import { data } from '../../constants'

const Fragrance = () => {
  return (
    <div className='app__fragrance'>
      <ScrolledText />
      <Navbar />
      <Banner title='Fragrance'/>
      <SortList name={data.Fragrance} category="fragrance"/>
      <AboutUs />
      <Footer />
    </div>
  )
}

export default Fragrance