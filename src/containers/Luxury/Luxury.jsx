import React from 'react';
import './Luxury.css';


import LuxuryCard from '../../components/LuxuryCard/LuxuryCard';
const Luxury = ( {category, name}) => {
  return (
    <div className='app__luxury'>
      <div className="app__luxury-heading">
        <h2>Trending Luxury</h2>
        <p>See All Trending</p>
      </div>
      <div className="app__luxury-container">
       {name.map((item) => (
        <LuxuryCard category={category} imgUrl={item.imgUrl} name={item.name} price={item.price} altText={item.altText} width={230} height={250}/>
       ))}
      </div>
    </div>
  )
}

export default Luxury