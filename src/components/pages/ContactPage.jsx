import React from 'react'
import Contact from './home/Contact';
import BackgroundImg from '../layout/BackgroundImg';
import Footer from '../layout/Footer';

export default function ContactPage() {
  return (
    <div>
      <BackgroundImg heading="Contact Us" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ducimus voluptatem, similique ad libero necessitatibus pariatur voluptate quisquam quis eos?"/>
      <Contact />
      <Footer />
    </div>
  )
}
