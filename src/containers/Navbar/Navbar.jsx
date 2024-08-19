import React, { useState } from 'react'

import { logo } from '../../constants/images';

import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { BsCart } from "react-icons/bs";
import { FaRegHeart, FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar sticky-top'>
        <div className="app__navbar-logo">
            <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>

        <ul className="app__navbar-links">
            <li className='mx-2'><Link to='/'>Home</Link></li>
            <li className='mx-2'><Link to='/accessories'>Accessories</Link></li>
            <li className='mx-2'><Link to='/male-wears'>Male Wears</Link></li>
            <li className='mx-2'><Link to='/female-wears'>Female Wears</Link></li>
            <li className='mx-2'><Link to='/shoes'>Shoes</Link></li>
            <li className='mx-2'><Link to='/fragrance'>Fragrance</Link></li>
        </ul>

        <div className="app__navbar-icons">
            <Link to='/search'><IoIosSearch fontSize={20} color='#fff' className='mx-1'/></Link>
            <Link to='/login'><HiOutlineUser fontSize={20} color='#fff' className='mx-1'/></Link>
            <Link to='/cart'><BsCart fontSize={20} color='#fff' className='mx-1'/></Link>
            <Link to='/wish-list'><FaRegHeart fontSize={20} color='#fff' className='mx-2'/></Link>
            <select className="form-select">
                <option>NGN</option>
                <option>USD</option>
            </select>
        </div>

        <div className="app__navbar-smallscreen">
            <RxHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
            {toggleMenu && (
                <div className="app__navbar-smallscreen_overlay animate__animated animate__slideInLeft">
                    <IoClose fontSize={27} onClick={() => setToggleMenu(false)} className='overlay-close'/>
                    <div className="app__navbar-smallscreen_content">
                        <div className='app__navbar-smallscreen-upper'>
                            <select className="form-select_smallscreen">
                                <option>NGN</option>
                                <option>USD</option>
                            </select>
                            <div className="input-search_smallscreen">
                                <input type="search" name="search" id="search" placeholder='Search'/>
                            </div>
                            <ul className="app__navbar-smallscreen-links">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/accessories'>Accessories</Link></li>
                                <li><Link to='/male-wears'>Male Wears</Link></li>
                                <li><Link to='/female-wears'>Female Wears</Link></li>
                                <li><Link to='/shoes'>Shoes</Link></li>
                                <li><Link to='/fragrance'>Fragrance</Link></li>
                            </ul>
                        </div>

                        <div className="app__navbar-smallscreen-lower">
                            <div className="app__navbar-smallscreen_cart">
                                <Link to='/cart' style={{color: 'black'}}><BsCart fontSize={25}/></Link>
                                <Link to='/cart'><h3>Shopping Cart</h3></Link>
                                <FaRegCircleUser fontSize={25}/>
                            </div>
                            <div className="app__navbar-smallscreen_login">
                                <HiOutlineUser fontSize={25}/>
                                <h3>Login</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar