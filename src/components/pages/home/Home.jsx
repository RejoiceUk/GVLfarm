import React from 'react'
import Hero from './Hero'
import About from './About'
import Product from './Product'
import LastestPost from './LastestPost'
import Contact from './Contact'
import Footer from '../../layout/Footer'

export default function Home() {
  return (
    <div className='bg-[#E3E3E3]'>
      <Hero />
      <About />
      <Product />
      <LastestPost />
      <Contact />
      <Footer />
    </div>
  )
}
