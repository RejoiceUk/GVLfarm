import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import "../src/assets/css/style.css";



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
