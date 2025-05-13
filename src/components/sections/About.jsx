import React from 'react'
import Button from '../ui/Button';
import chickens from '../../assets/images/chickens.png';
import casava from '../../assets/images/casava.png';
import fruits from '../../assets/images/fruits.png';

export default function About() {
    return (
        <div className='px-[10%] py-[3%] bg-white flex justify-center'>
            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <h2 className='text-[2rem] text-[var(--primary)] py-8 font-[700]'>About Us</h2>
                    <p className='text-[.8rem] leading-[2] text-[#525560] font-[400]'>Gandaria Integrated Farms is the agricultural arm of Gandaria Ventures Limited, dedicated to advancing sustainable farming and food security in Nigeria. Our work spans crop cultivation, livestock production, and agritech solutions—blending tradition with innovation to nourish communities and empower farmers.
                        With deep roots in local expertise and a forward-thinking approach, we’re committed to building a resilient food system, one harvest at a time.</p>
                    <div className='mt-8'>
                        <Button buttonVariant='dark' text='Read More' />
                    </div>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <img src={chickens} alt="Livestock" />
                    <div className='flex gap-4'>
                        <div>
                            <img src={casava} alt="Casava" />
                        </div>
                        <div>
                            <img src={fruits} alt="fruits" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
