import React from 'react';
import bgimage from "../../../assets/images/bg1.png";
import next from "../../../assets/images/next.png";
import prev from "../../../assets/images/prev.png";
import farming from "../../../assets/images/farming.png";
import livestock from "../../../assets/images/livestock.png";
import research from "../../../assets/images/traningandresearch.png";
import agritech from "../../../assets/images/agritech.png";
import Button from '../../ui/Button';

export default function Hero() {
    return (
        <div className='flex flex-col'>
            <div
                className="pt-6 h-[94.4vh] bg-no-repeat bg-center bg-cover text-[white] flex justify-center items-center"
                style={{ backgroundImage: `url(${bgimage})` }}
            >
                <div className='text-center'>
                    <div>
                        <h1 className='md:text-[3rem] text-[2rem] font-[700] leading-[3rem] mb-2'>Feeding the Future, Sustainably</h1>
                        <p className='md:text-[.9rem] text-[.7rem] w-md'>From seed to harvest, we cultivate quality with a commitment to sustainability <br /> and innovation in agriculture.</p>
                    </div>

                    <div className='flex gap-6 justify-center mt-10'>
                        <Button buttonVariant='transparent' text='Explore Our Farm' />
                        <Button buttonVariant='white' text='Contact Us' />
                    </div>

                    <div className='flex gap-6 justify-center pt-20'>
                          <img src={prev} alt="next" />
                        <img src={next} alt="prev" />
                      
                    </div>

                </div>
            </div>

            <div className='bg-[#E3E3E3] text-[#404A3D] text-[1rem] font-[600] justify-center grid md:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-6 px-[10%] py-[3%]'>

                <div className='bg-white rounded-lg items-center shadow py-12 px-5 flex flex-row gap-4'>
                    <div className='w-[40px]'>
                        <img src={farming} alt="crop farming" className='w-full' />
                    </div>
                    <div>
                        <p>Crop Farming</p>
                    </div>
                </div>

                <div className='bg-white rounded-lg items-center shadow py-12 px-5 flex flex-row gap-4'>
                    <div className='w-[40px]'>
                        <img src={livestock} alt="crop farming" className='w-full' />
                    </div>
                    <div>
                        <p>Livestock</p>
                    </div>
                </div>

                <div className='bg-white rounded-lg px-5 items-center shadow py-12 flex flex-row gap-4'>
                    <div className='w-[40px]'>
                        <img src={agritech} alt="crop farming" className='w-full' />
                    </div>
                    <div>
                        <p>Agritech</p>
                    </div>
                </div>

                <div className='bg-white rounded-lg px-5 items-center shadow py-12 px-3 flex flex-row gap-4'>
                    <div className='w-[40px]'>
                        <img src={research} alt="crop farming" className='w-full' />
                    </div>
                    <div>
                        <p className='now-wrap'>Training & Research</p>
                    </div>
                </div>


               

            </div>
        </div>
    )
}
