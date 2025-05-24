import React from 'react';
import vegitableImg from "../../../assets/images/vegitables.png";
import livestock from "../../../assets/images/pigs.png";
import vegitable2 from "../../../assets/images/vegitable2.png";
import truck from "../../../assets/images/truck.png";
import people from "../../../assets/images/people.png";
import Button from '../../ui/Button';
import { NavLink } from 'react-router-dom';

export default function Product() {
    return (
        <div>
            <div className='px-[10%] py-[3%] flex flex-cols justify-center'>
                <div>
                    <div className='text-center'>
                        <h2 className='text-[2rem] pb-4 font-[700] text-[var(--primary)]'>Our Products & Services</h2>
                        <p className='text-[.9rem] font-[400]'>At Gandaria Integrated Farms, we offer a diverse range of agricultural products and services designed to meet the needs of consumers, partners, and communities. Our commitment to quality, innovation, and sustainability is evident in everything we produce and provide.</p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-12 relative pt-8 justify-center md:grid-cols-2 text-white'>

                        <div style={{ backgroundImage: `url(${vegitableImg})` }} className='relative items-bottom shadow rounded bg-cover bg-no-repeat bg-center'>
                            <div className='p-4 bg-gradient-to-b from-transparent to-black opacity-[.8] rounded-lg pt-[200px]'>
                                <h3 className='text-[1.5rem] font-[500] leading-[1] mb-3'>Crop Farming</h3>
                                <p className='text-[.8rem] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${livestock})` }} className='relative items-bottom shadow rounded bg-cover bg-no-repeat bg-center'>
                            <div className='p-4 bg-gradient-to-b from-transparent to-black opacity-[.8] rounded-lg pt-[200px]'>
                                <h3 className='text-[1.5rem] font-[500] leading-[1] mb-3'>Live Stock</h3>
                                <p className='text-[.8rem] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${vegitable2})` }} className='relative items-bottom shadow rounded bg-cover bg-no-repeat bg-center'>
                            <div className='p-4 bg-gradient-to-b from-transparent to-black opacity-[.8] rounded-lg pt-[200px]'>
                                <h3 className='text-[1.5rem] font-[500] leading-[1] mb-3'> Agritech & Innovation</h3>
                                <p className='text-[.8rem] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${truck})` }} className='relative items-bottom shadow rounded bg-cover bg-no-repeat bg-center'>
                            <div className='p-4 bg-gradient-to-b from-transparent to-black opacity-[.8] rounded-lg pt-[200px]'>
                                <h3 className='text-[1.5rem] font-[500] leading-[1] mb-3'>Produce Distribution & Supply</h3>
                                <p className='text-[.8rem] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${people})` }} className='relative items-bottom shadow rounded bg-cover bg-no-repeat bg-center'>
                            <div className='p-4 bg-gradient-to-b from-transparent to-black opacity-[.8] rounded-lg pt-[200px]'>
                                <h3 className='text-[1.5rem] font-[500] leading-[1] mb-3'> Farm Consultancy & Training</h3>
                                <p className='text-[.8rem] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-16 px-[10%] py-[5%] bg-white'>
                <div className='px-6'>
                    {/* video */}
                    <iframe
                    className='rounded-lg w-[100%] h-[100%]'
                        src="https://www.youtube.com/embed/9VwlicTZDLQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>

                </div>

                <div className='px-8'>
                    <h3 className='text-[1.5rem] font-[700]'>Experience the Heart of Our Farm in Motion</h3>
                    <div className='text-[.9rem] font-[400] text-[#525560] pt-8 mb-6'>
                        <p>Step into the world of Gandaria Integrated Farms through the lens of this short video. From the early morning dew glistening over rows of maize, to the careful tending of livestock and the hum of innovation in our fields, this
                            visual journey captures the essence of who we are and what we stand for.</p>
                        <p>Take a moment to see how we blend tradition with technology to build a better agricultural future—one harvest at a time.</p>
                    </div>
                    <NavLink to="/media"><Button buttonVariant='dark' text='View our Farm' /></NavLink>
                </div>
            </div>
        </div>
    )
}
