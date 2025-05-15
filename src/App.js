import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import "../src/assets/css/style.css";
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';



export default function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}
