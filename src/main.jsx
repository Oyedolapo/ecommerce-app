import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Accessories, Cart, FemaleWears, Fragrance, Login, MaleWears, ProductDetail, Search, Shoes, Tracking, Wishlist } from './pages/index.js'
import { StoreProvider } from './Context/StoreContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/male-wears' element={<MaleWears />}/>
        <Route path='/female-wears' element={<FemaleWears />}/>
        <Route path='/shoes' element={<Shoes />}/>
        <Route path='/fragrance' element={<Fragrance />}/>
        <Route path='/:category/:name' element={<ProductDetail />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/wish-list' element={<Wishlist />}/>
        <Route path='/tracking' element={<Tracking />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </StoreProvider>
  
  
)
