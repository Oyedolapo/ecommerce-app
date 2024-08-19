import React from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers'
import Banner from '../../components/Banner/Banner'
import SortList from '../../components/SortList/SortList'
import { data } from '../../constants'

const FemaleWears = () => {
  return (
    <div className='app__femaleWears'>
      <ScrolledText />
      <Navbar />
      <Banner title='Female Wears'/>
      <SortList name={data.femaleWears} category="female-wears"/>
      <AboutUs />
      <Footer />
    </div>
  )
}

export default FemaleWears