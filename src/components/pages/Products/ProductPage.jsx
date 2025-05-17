import React from 'react'
import BackgroundImg from '../../layout/BackgroundImg'
import Footer from '../../layout/Footer'
import Product from '../home/Product'

export default function ProductPage() {
  return (
    <div>
      <BackgroundImg heading="Product" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ducimus voluptatem, similique ad libero necessitatibus pariatur voluptate quisquam quis eos?"/>
      <Product />
      <Footer />
    </div>
  )
}
