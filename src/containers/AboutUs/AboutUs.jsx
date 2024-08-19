import React from 'react';

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='app__aboutUs'>
        <div className="app__aboutUs-text">
            <h4>About us</h4>
            <p>EC Luxury is a premier luxury fashion brand, offering the finest quality clothing, shoes, perfumes and accessories for discerning individuals who value timeless style, exquisite craftsmanship, and attention to detail.</p>
        </div>

        <div className="app__aboutUs-address">
            <h4>Visit our store</h4>
            <p>8b Emma Abimbola Cole,<br /> Lekki Phase 1, Lagos</p>
        </div>
    </div>
  )
}

export default AboutUs