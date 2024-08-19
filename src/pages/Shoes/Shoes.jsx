import React from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers'
import Banner from '../../components/Banner/Banner'
import SortList from '../../components/SortList/SortList'
import { data } from '../../constants'

const Shoes = () => {
  return (
    <div className='app__shoes'>
      <ScrolledText />
      <Navbar />
      <Banner title='Shoes'/>
      <SortList name={data.Shoes} category="shoes"/>
      <AboutUs />
      <Footer />
    </div>
  )
}

export default Shoes