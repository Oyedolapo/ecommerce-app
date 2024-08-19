import React from 'react'
import LuxuryCard from '../../components/LuxuryCard/LuxuryCard'

import { PiDotsNine } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";


import './SortList.css'

const SortList = ({ category, name }) => {
  return (
    <div className="app__accessory-content">
        <div className="app__accessory-content-headings">
            <div className="app__accessory-content-headings_left">
                <p>All Products</p>
                <p>Hot Products</p>
                <p>New Products</p>
                <p>Sale Products</p>
            </div>
            <div className="app__accessory-content-headings_right">
                <p className='my-1'>Default sorting</p>
                <div />
                <PiDotsNine className='mx-2'/>
                <HiOutlineDotsHorizontal className='mx-2'/>
                <GoDotFill className='mx-2'/>
                <div />
                <CiFilter className='mx-2'/>
            </div>
        </div>
        <hr />
        <div className="app__accessory-container">
            {name.map((item) => (
            <LuxuryCard category={category} imgUrl={item.imgUrl} name={item.name} price={item.price} altText={item.altText} width={230} height={250}/>
            ))}
        </div>
    </div>
  )
}

export default SortList