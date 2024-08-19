import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom'
import { data } from '../../constants';
import { FaAngleRight } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { FaRegHeart} from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import './ExactProduct.css'
import LuxuryCard from '../LuxuryCard/LuxuryCard';
import { useStore } from '../../Context/StoreContext';
import { toast } from 'react-toastify';

const ExactProduct = ( {category}) => {
    const { name } = useParams()
    const { state, dispatch} = useStore();
    let product = null;
    let categoryName = '';
    let relatedProduct = null;

    Object.keys(data).forEach(cat => {
        const foundProduct = data[cat].find(item => item.name === name);
        if (foundProduct) {
            product = foundProduct;
            categoryName = cat.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            relatedProduct = cat
        }
    });

    const getRelatedProduct = useMemo(() => {
        if (!relatedProduct) return [];

        const categoryProducts = data[relatedProduct].filter(item => item.name !== name);
        const shuffled = categoryProducts.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5)
    }, [relatedProduct, name])

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        toast.success(`${product.name} has been added to your cart!`);
    };

    const handleAddToWishlist = () => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
        toast.success(`${product.name} has been added to your wishlist!`);
    };
    


  return (
    <div className='app__exactProduct'>
        <div className="app__exactProduct-heading">
            <h3>Home <FaAngleRight /> {product.name}</h3>
        </div>
        <div className="app__exactProduct-content">
            <div className="app__exactProduct-content-left">
                <div className="app__exactProduct-content_image-list">
                    <img src={product.imgUrl} alt="" />
                    <img src={product.imgUrl} alt="" />
                    <img src={product.imgUrl} alt="" />
                    <img src={product.imgUrl} alt="" />
                </div>
                <div className='app__exactProduct-content_main-image'>
                    <img src={product.imgUrl} alt={product.altText}/>
                </div>
            </div>
            <div className="app__exactProduct-content-right">
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <div className="app__exactProduct-content-cart-details">
                    <button className='cart-btn' onClick={handleAddToCart}>
                        <BsCart /> Add to cart
                    </button>
                    <button className='wish-btn' onClick={handleAddToWishlist}>
                        <FaRegHeart />
                    </button>
                </div>
                <div className="app__exactProduct-category">
                    <h3><span>Category:</span> {categoryName}</h3>
                </div>
                <div className="app__exactProduct_social-media">
                    <span className="app__exactProduct-socialLink">
                        <FaFacebookF />
                        <h5>Facebook</h5>
                    </span>
                    <span className="app__exactProduct-socialLink">
                        <FaTwitter />
                        <h5>Twitter</h5>
                    </span>
                    <span className="app__exactProduct-socialLink">
                        <FaPinterestP />
                        <h5>Pinterest</h5>
                    </span>
                    <span className="app__exactProduct-socialLink">
                        <MdOutlineEmail />
                        <h5>Email</h5>
                    </span>
                </div>
            </div>
        </div>
        <hr />

        <div className="app__relatedProduct">
            <h2>Related products</h2>
            <div className="app__relatedProduct-container">
                {getRelatedProduct.map(item => (
                    <LuxuryCard 
                        key={item.altText}
                        category={category}
                        imgUrl={item.imgUrl}
                        name={item.name}
                        price={item.price}
                        altText={item.altText}
                        width={230}
                        height={250}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ExactProduct