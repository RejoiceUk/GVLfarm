import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import "../src/assets/css/style.css";
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import BlogLandingPage from './components/pages/blog/BlogLandingPage';
import ContactPage from './components/pages/ContactPage';
import ProductPage from './components/pages/Products/ProductPage';
import Media from './components/pages/mediagallery/Media';



export default function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<ContactPage />}/>
      <Route path='/blog' element={<BlogLandingPage />} />
      <Route path='/product' element={<ProductPage />} />
        <Route path='/media' element={<Media />} />
    </Routes>
    </BrowserRouter>
   </div>
  )
}
