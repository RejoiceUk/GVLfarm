import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import "../src/assets/css/style.css";
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import ContactPage from './components/pages/ContactPage';
import ProductPage from './components/pages/Products/ProductPage';
import BlogLayout from './components/pages/blog/BlogLayout';
import AllPost from './components/pages/blog/AllPost';
import { AgriculturalTips } from './components/pages/blog/AgriculturalTips';
import MediaAllPost from './components/pages/mediagallery/MediaAllPost';
import MediaGalleryLayout from './components/pages/mediagallery/MediaGalleryLayout';
import MediaAgricTips from './components/pages/mediagallery/MediaAgricTips';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfUse from './components/pages/TermsOfUse';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactPage />} />
          {/* blog routes */}
          <Route path='/blog' element={<BlogLayout />} >
            <Route index element={<AllPost />} />
            <Route path='agriculture-tips' element={<AgriculturalTips />} />
          </Route>

          <Route path='/product' element={<ProductPage />} />

          {/* media and gallery */}
          <Route path='/media' element={<MediaGalleryLayout />} >
            <Route index element={<MediaAllPost />} />
             <Route path='agriculture-tips' element={<MediaAgricTips />} />
          </Route>

          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
