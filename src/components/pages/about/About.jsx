import React from 'react'
import BackgroundImg from '../../layout/BackgroundImg'
import OurStory from './OurStory'
import WhyChooseUs from './WhyChooseUs'
import Footer from '../../layout/Footer'
import OurWork from './OurWork'

export default function About() {
    let description = "At Gandaria Integrated Farms, we believe that farming is more than cultivation — it's a commitment to sustainability, innovation, and community."
    return (
        <div>
            <BackgroundImg heading="About Us" description={description} />
            <OurStory />
            <WhyChooseUs />
            <OurWork />
            <Footer />

        </div>
    )
}
