import React from 'react'
import { AboutUs, Footer, Navbar, ScrolledText } from '../../containers'
import ExactProduct from '../../components/ExactProduct/ExactProduct';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
  const { category } = useParams();
   
  return (
    <div className='app__productDetail'>
        <ScrolledText />
        <Navbar />
        <hr />
        <ExactProduct category={category}/>
        <AboutUs />
        <Footer />
    </div>
  )
}

export default ProductDetail