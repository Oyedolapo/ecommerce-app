import React from 'react'
import { AboutUs, Footer, Navbar } from '../../containers';
import './Search.css';

const Search = () => {
  return (
    <div>
        <Navbar />
        <div className="app__search">
            <input type="search" name="" id="" placeholder='Search for anything....'/>
        </div>
        <AboutUs />
        <Footer />
    </div>
  )
}

export default Search