import React from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers'
import Banner from '../../components/Banner/Banner'
import SortList from '../../components/SortList/SortList'
import { data } from '../../constants'

const MaleWears = () => {
  return (
    <div className='app__maleWears'>
      <ScrolledText />
      <Navbar />
      <Banner title='Male Wears'/>
      <SortList name={data.menWears} category="male-wears"/>
      <AboutUs />
      <Footer />
    </div>
  )
}

export default MaleWears